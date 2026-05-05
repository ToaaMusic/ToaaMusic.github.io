<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import type { CardData } from 'ui'
// @ts-ignore
import { data as allPosts } from './scripts/posts.data'

interface PostItem extends CardData {
  tags: string[]
  created_at: string
  class?: string
  summary: string
}

interface BaseEntry {
  key: string
  title: string
  created_at: string
  tags: string[]
  summary: string
}

interface SingleEntry extends BaseEntry {
  type: 'single'
  post: PostItem
}

interface CollectionEntry extends BaseEntry {
  type: 'collection'
  latest: PostItem
  posts: PostItem[]
}

type DisplayEntry = SingleEntry | CollectionEntry

const route = useRoute()
const router = useRouter()
const { frontmatter } = useData()

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
const normalizePath = (path: string) => path.replace(/\.html$/, '')

const formatShortDate = (value?: string) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return `${String(date.getFullYear()).slice(-2)}/${date.getMonth() + 1}/${date.getDate()}`
}

const uniqueTags = (tags: string[]) => [...new Set(tags.filter(Boolean))]

const posts = computed<PostItem[]>(() =>
  (allPosts as CardData[]).map((post) => ({
    ...post,
    tags: Array.isArray(post.tags) ? post.tags : [],
    class: post.class || '',
    created_at: post.created_at || '',
    summary: post.summary || '',
  })),
)

const classCounts = computed(() => {
  const counts = new Map<string, number>()
  posts.value.forEach((post) => {
    if (!post.class) return
    counts.set(post.class, (counts.get(post.class) || 0) + 1)
  })
  return counts
})

const entries = computed<DisplayEntry[]>(() => {
  const merged = new Set<string>()

  return posts.value.flatMap((post) => {
    const className = post.class?.trim()
    const canMerge = className && (classCounts.value.get(className) || 0) > 1

    if (!canMerge) {
      return [{
        type: 'single',
        key: `post:${post.md_url}`,
        title: post.title,
        created_at: post.created_at,
        tags: post.tags,
        summary: post.summary,
        post,
      } satisfies SingleEntry]
    }

    if (merged.has(className)) return []
    merged.add(className)

    const groupPosts = posts.value.filter((item) => item.class?.trim() === className)
    const latest = groupPosts[0]

    return [{
      type: 'collection',
      key: `class:${className}`,
      title: className,
      created_at: latest.created_at,
      tags: uniqueTags(groupPosts.flatMap((item) => item.tags)).slice(0, 6),
      summary: latest.summary || `合集内共 ${groupPosts.length} 篇文章`,
      latest,
      posts: groupPosts,
    } satisfies CollectionEntry]
  })
})

const currentPath = computed(() => normalizePath(route.path))
const currentSlug = computed(() => currentPath.value.startsWith('/posts/') ? currentPath.value.slice('/posts/'.length) : '')
const mode = computed<'home' | 'list' | 'post'>(() => {
  if (currentPath.value === '/') return 'home'
  if (currentPath.value === '/posts') return 'list'
  if (currentPath.value.startsWith('/posts/')) return 'post'
  return 'list'
})

const activeKey = ref('')
const currentIndex = ref(0)
const targetIndex = ref(0)
const listShellRef = ref<HTMLElement | null>(null)
let raf = 0
let lastWheelTime = 0

const entryForSlug = (slug: string) =>
  entries.value.find((entry) =>
    entry.type === 'single'
      ? entry.post.md_url === slug
      : entry.posts.some((post) => post.md_url === slug),
  )

const syncFromIndex = (index: number) => {
  const entry = entries.value[Math.round(clamp(index, 0, Math.max(entries.value.length - 1, 0)))]
  if (entry) activeKey.value = entry.key
}

const syncToActive = () => {
  const index = entries.value.findIndex((entry) => entry.key === activeKey.value)
  if (index >= 0) {
    currentIndex.value = index
    targetIndex.value = index
  }
}

watch(
  [entries, currentSlug, mode],
  () => {
    if (mode.value === 'home') return
    if (mode.value === 'post' && currentSlug.value) {
      const matched = entryForSlug(currentSlug.value)
      if (matched) {
        activeKey.value = matched.key
        syncToActive()
        return
      }
    }
    if (!entries.value.some((entry) => entry.key === activeKey.value)) {
      activeKey.value = entries.value[0]?.key || ''
    }
    syncToActive()
  },
  { immediate: true },
)

const activeEntry = computed(
  () => entries.value.find((entry) => entry.key === activeKey.value) || entries.value[0],
)

const currentPostTitle = computed(() => {
  if (mode.value !== 'post' || !currentSlug.value) return ''
  return posts.value.find((post) => post.md_url === currentSlug.value)?.title || frontmatter.value.title || ''
})
const currentPostDate = computed(() => formatShortDate(String(frontmatter.value.date || '')))
const currentPostTags = computed<string[]>(() => Array.isArray(frontmatter.value.tags) ? frontmatter.value.tags : [])

function tick() {
  currentIndex.value = lerp(currentIndex.value, targetIndex.value, 0.12)
  syncFromIndex(currentIndex.value)
  if (Math.abs(currentIndex.value - targetIndex.value) < 0.001) {
    currentIndex.value = targetIndex.value
    syncFromIndex(currentIndex.value)
    raf = 0
    return
  }
  raf = requestAnimationFrame(tick)
}

function commitTarget(next: number) {
  targetIndex.value = clamp(next, 0, Math.max(entries.value.length - 1, 0))
  if (!raf) raf = requestAnimationFrame(tick)
}

function onWheel(e: WheelEvent) {
  if (mode.value !== 'list') return
  const now = performance.now()
  const delta = e.deltaY > 0 ? 1 : -1
  const fast = now - lastWheelTime < 120
  lastWheelTime = now
  commitTarget(targetIndex.value + delta * (fast ? 0.7 : 1))
}

function onKeydown(e: KeyboardEvent) {
  if (mode.value !== 'list') return
  if (e.key === 'ArrowDown') commitTarget(targetIndex.value + 1)
  if (e.key === 'ArrowUp') commitTarget(targetIndex.value - 1)
  if (e.key === 'Enter' && activeEntry.value) handleEntryClick(activeEntry.value)
}

function itemStyle(index: number) {
  const offset = index - currentIndex.value
  const abs = Math.abs(offset)
  const visible = abs < 4.2
  const t = clamp(1 - abs / 4.2, 0, 1)
  const eased = easeOutCubic(t)
  const y = offset * 102
  const scale = lerp(0.76, 1.02, eased)
  const opacity = lerp(0.12, 1, eased)
  const blur = lerp(6, 0, eased)
  const x = lerp(90, 0, eased)
  const rot = lerp(10, 0, eased) * Math.sign(offset)
  return {
    display: visible ? 'block' : 'none',
    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateZ(${rot}deg)`,
    opacity,
    filter: `blur(${blur}px)`,
    zIndex: Math.floor(100 - abs * 10),
  }
}

const rotateX = ref(0)
const rotateY = ref(0)
const glowX = ref(50)
const glowY = ref(50)
const angle = ref(132)
const cardRef = ref<HTMLElement | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value || mode.value !== 'home') return
  requestAnimationFrame(() => {
    const rect = cardRef.value!.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = e.clientX - centerX
    const offsetY = e.clientY - centerY
    rotateY.value = clamp(offsetX / 25, -15, 15)
    rotateX.value = clamp(-offsetY / 25, -15, 15)
    glowX.value = ((e.clientX - rect.left) / rect.width) * 100
    glowY.value = ((e.clientY - rect.top) / rect.height) * 100
    angle.value = ((Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180) / Math.PI + 360) % 360
  })
}

function handleMouseLeave() {
  rotateX.value = 0
  rotateY.value = 0
  glowX.value = 50
  glowY.value = 50
  angle.value = 132
}

const openPosts = () => {
  if (mode.value === 'home') return router.go('/posts')
  if (mode.value === 'list') return router.go('/')
  router.go('/posts')
}

const handleEntryClick = (entry: DisplayEntry) => {
  const index = entries.value.findIndex((item) => item.key === entry.key)
  if (index >= 0 && Math.round(currentIndex.value) !== index) {
    commitTarget(index)
    return
  }
  activeKey.value = entry.key
  if (entry.type === 'single') return router.go(`/posts/${entry.post.md_url}`)
  router.go(`/posts/${entry.latest.md_url}`)
}

const openPost = (slug: string, parentKey: string) => {
  activeKey.value = parentKey
  router.go(`/posts/${slug}`)
}

onMounted(() => {
  listShellRef.value?.focus()
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <div class="immersive-shell" :class="`mode-${mode}`">
    <div class="shell-bg"></div>
    <div class="shell-glow"></div>

    <button
      ref="cardRef"
      class="avatar-orb"
      type="button"
      :aria-label="mode === 'home' ? '进入文章列表' : mode === 'list' ? '返回首页' : '返回文章列表'"
      @click="openPosts"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      :style="{
        transform: `translate(var(--orb-shift-x), var(--orb-shift-y)) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        background: `linear-gradient(${angle}deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))`
      }"
    >
      <div
        class="orb-highlight"
        :style="{ background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.34), transparent 65%)` }"
      ></div>
      <div class="orb-avatar-wrap">
        <img
          class="orb-avatar"
          src="https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg"
          alt="ToaaM avatar"
        />
      </div>
      <div class="orb-copy">
        <p>Personal Log</p>
        <h1>ToaaM</h1>
      </div>
    </button>

    <section
      ref="listShellRef"
      class="posts-panel"
      tabindex="0"
      @wheel.prevent="onWheel"
      @keydown="onKeydown"
    >
      <div class="list-rail"></div>
      <div class="posts-stack">
        <button
          v-for="(entry, index) in entries"
          :key="entry.key"
          type="button"
          class="post-entry"
          :class="{ active: activeKey === entry.key }"
          :style="itemStyle(index)"
          @click="handleEntryClick(entry)"
        >
          <div class="entry-head">
            <h2>{{ entry.title }}</h2>
            <time>{{ formatShortDate(entry.created_at) }}</time>
          </div>
          <div v-if="activeKey === entry.key" class="entry-body">
            <p>{{ entry.type === 'collection' ? `共 ${entry.posts.length} 篇 · ${entry.summary}` : entry.summary }}</p>
            <div v-if="entry.tags.length" class="entry-tags">
              <span v-for="tag in entry.tags" :key="tag">#{{ tag }}</span>
            </div>
            <div v-if="entry.type === 'collection'" class="entry-children">
              <button
                v-for="post in entry.posts"
                :key="post.md_url"
                type="button"
                class="entry-child"
                :class="{ current: currentSlug === post.md_url }"
                @click.stop="openPost(post.md_url, entry.key)"
              >
                <span>{{ post.title }}</span>
                <time>{{ formatShortDate(post.created_at) }}</time>
              </button>
            </div>
          </div>
        </button>
      </div>
    </section>

    <section class="post-panel">
      <div class="post-surface">
        <header class="post-header">
          <p class="post-date">{{ currentPostDate }}</p>
          <h1>{{ currentPostTitle }}</h1>
          <div v-if="currentPostTags.length" class="entry-tags">
            <span v-for="tag in currentPostTags" :key="tag">#{{ tag }}</span>
          </div>
        </header>
        <article class="post-content">
          <div class="md">
            <Content />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.immersive-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: var(--main-text);
  --orb-left: 50%;
  --orb-top: 50%;
  --orb-width: min(78vw, 350px);
  --orb-height: min(78vh, 430px);
  --orb-shift-x: -50%;
  --orb-shift-y: -50%;
  --orb-radius: 30px;
  --panel-opacity: 0;
  --post-opacity: 0;
}

.mode-list {
  --orb-left: clamp(20px, 8vw, 116px);
  --orb-top: 50%;
  --orb-width: clamp(154px, 18vw, 196px);
  --orb-height: clamp(154px, 18vw, 196px);
  --orb-shift-x: 0;
  --orb-shift-y: -50%;
  --orb-radius: 999px;
  --panel-opacity: 1;
}

.mode-post {
  --orb-left: 28px;
  --orb-top: 28px;
  --orb-width: 88px;
  --orb-height: 88px;
  --orb-shift-x: 0;
  --orb-shift-y: 0;
  --orb-radius: 999px;
  --post-opacity: 1;
}

.shell-bg,
.shell-glow {
  position: absolute;
  inset: 0;
}

.shell-bg {
  background:
    radial-gradient(circle at 16% 18%, rgba(255, 189, 143, 0.18), transparent 28%),
    radial-gradient(circle at 88% 14%, rgba(127, 176, 255, 0.16), transparent 24%),
    linear-gradient(135deg, #0a0d14 0%, #101827 55%, #0c1018 100%);
}

.shell-glow {
  background:
    radial-gradient(circle at 68% 48%, rgba(120, 160, 255, 0.12), transparent 22%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04), transparent 40%);
  pointer-events: none;
}

.avatar-orb {
  position: absolute;
  left: var(--orb-left);
  top: var(--orb-top);
  width: var(--orb-width);
  height: var(--orb-height);
  border: 0;
  border-radius: var(--orb-radius);
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.32);
  transform-style: preserve-3d;
  transition:
    left 0.72s cubic-bezier(0.2, 0.8, 0.2, 1),
    top 0.72s cubic-bezier(0.2, 0.8, 0.2, 1),
    width 0.72s cubic-bezier(0.2, 0.8, 0.2, 1),
    height 0.72s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-radius 0.72s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.32s ease;
  z-index: 4;
}

.orb-highlight,
.orb-avatar-wrap,
.orb-copy {
  position: absolute;
  inset: 0;
}

.orb-highlight {
  z-index: 2;
  pointer-events: none;
}

.orb-avatar-wrap {
  z-index: 1;
}

.orb-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
}

.orb-copy {
  z-index: 3;
  inset: auto 24px 22px;
  color: #fff;
  text-align: left;
  transition: opacity 0.25s ease;
}

.mode-list .orb-copy,
.mode-post .orb-copy {
  opacity: 0;
}

.orb-copy p {
  font-size: 0.8rem;
  opacity: 0.72;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.orb-copy h1 {
  margin-top: 6px;
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-weight: 700;
}

.posts-panel {
  position: absolute;
  left: calc(clamp(20px, 8vw, 116px) + clamp(154px, 18vw, 196px) * 0.52);
  right: clamp(18px, 6vw, 78px);
  top: 50%;
  height: min(78vh, 760px);
  transform: translateY(-50%);
  opacity: var(--panel-opacity);
  transition: opacity 0.45s ease, transform 0.72s cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;
  z-index: 3;
}

.list-rail {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 120px;
  border-radius: 0 999px 999px 0;
  background: linear-gradient(90deg, rgba(255,255,255,0.11), rgba(255,255,255,0.02));
  backdrop-filter: blur(12px);
}

.posts-stack {
  position: absolute;
  inset: 0 0 0 42px;
}

.post-entry {
  position: absolute;
  left: 0;
  right: 0;
  min-height: 88px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  background: rgba(11, 16, 27, 0.74);
  backdrop-filter: blur(16px);
  color: inherit;
  text-align: left;
  padding: 18px 20px;
  cursor: pointer;
}

.post-entry.active {
  background: rgba(18, 26, 42, 0.92);
}

.entry-head {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: baseline;
}

.entry-head h2 {
  font-size: 1.02rem;
  font-weight: 600;
}

.entry-head time {
  color: rgba(255, 255, 255, 0.56);
  white-space: nowrap;
}

.entry-body {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}

.entry-body p {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
}

.entry-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.entry-tags span {
  font-size: 0.84rem;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
}

.entry-children {
  display: grid;
  gap: 8px;
}

.entry-child {
  width: 100%;
  border: 0;
  border-radius: 14px;
  background: rgba(255,255,255,0.06);
  color: inherit;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
}

.entry-child.current,
.entry-child:hover {
  background: rgba(255,255,255,0.12);
}

.post-panel {
  position: absolute;
  inset: 26px 26px 26px 124px;
  opacity: var(--post-opacity);
  transform: translateY(40px) scale(0.98);
  transition: opacity 0.45s ease, transform 0.72s cubic-bezier(0.2, 0.8, 0.2, 1);
  pointer-events: none;
  z-index: 2;
}

.mode-post .post-panel {
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.post-surface {
  height: 100%;
  overflow: auto;
  border-radius: 32px;
  background: rgba(10, 13, 21, 0.9);
  backdrop-filter: blur(16px);
  padding: 38px clamp(18px, 5vw, 52px) 46px;
  box-shadow: 0 26px 100px rgba(0, 0, 0, 0.26);
}

.post-header {
  max-width: 900px;
  margin: 0 auto 34px;
}

.post-date {
  margin-bottom: 10px;
  opacity: 0.58;
  letter-spacing: 0.2em;
}

.post-header h1 {
  font-size: clamp(2rem, 4vw, 3.8rem);
  line-height: 1.05;
  margin-bottom: 16px;
}

.post-content {
  max-width: 900px;
  margin: 0 auto;
}

:deep(.post-content img) {
  max-width: 100%;
  border-radius: 18px;
}

@media (max-width: 900px) {
  .mode-list {
    --orb-left: 16px;
    --orb-top: 18px;
    --orb-width: 84px;
    --orb-height: 84px;
    --orb-shift-y: 0;
  }

  .posts-panel {
    left: 16px;
    right: 16px;
    top: 110px;
    height: calc(100vh - 126px);
    transform: none;
  }

  .list-rail {
    display: none;
  }

  .posts-stack {
    inset: 0;
  }

  .post-panel {
    inset: 108px 14px 14px;
  }

  .post-surface {
    border-radius: 24px;
    padding: 24px 18px 34px;
  }
}
</style>
