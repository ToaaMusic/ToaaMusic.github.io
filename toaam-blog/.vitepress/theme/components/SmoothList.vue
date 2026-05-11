<template>
  <div class="osu-list" tabindex="0" @wheel.prevent="onWheel" @keydown="onKeydown">
    <div class="list-wrap">
      <main class="list-container">
        <div class="song-list">
          <button
            v-for="(post, i) in posts"
            :key="post.id"
            class="song-item"
            :class="{ active: Math.round(currentIndex) === i }"
            :style="itemStyle(i)"
            @click="handleItemClick(i)"
          >
            <div class="title">{{ post.title }}</div>
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { data as posts } from './scripts/posts.data'
import { useRouter } from 'vitepress'

const router = useRouter()
const currentIndex = ref(0)
const targetIndex = ref(0)
let raf = 0
let lastWheelTime = 0

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))
const lerp = (a, b, t) => a + (b - a) * t
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

function itemStyle(i) {
  const offset = i - currentIndex.value
  const abs = Math.abs(offset)
  const t = clamp(1 - abs / 4.2, 0, 1)
  const eased = easeOutCubic(t)
  const y = offset * -86
  const scale = lerp(0.74, 1.08, eased)
  const opacity = lerp(0.08, 1, eased)
  const blur = lerp(5.5, 0, eased)
  const x = lerp(-86, 0, eased)
  const rot = lerp(-12, 0, eased) * Math.sign(offset)
  return {
    display: abs < 4.2 ? 'grid' : 'none',
    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateZ(${rot}deg)`,
    opacity,
    filter: `blur(${blur}px)`,
    zIndex: Math.floor(100 - abs * 10),
  }
}

function handleItemClick(i) {
  if (Math.round(currentIndex.value) === i) {
    const post = posts[i]
    router.go('posts/' + post?.md_url)
  } else {
    select(i)
  }
}

function tick() {
  currentIndex.value = lerp(currentIndex.value, targetIndex.value, 0.12)
  if (Math.abs(currentIndex.value - targetIndex.value) < 0.001) {
    currentIndex.value = targetIndex.value
    raf = 0
    return
  }
  raf = requestAnimationFrame(tick)
}

function commitTarget(next) {
  targetIndex.value = clamp(next, 0, posts.length - 1)
  if (!raf) raf = requestAnimationFrame(tick)
}

function select(i) {
  commitTarget(i)
}

function onWheel(e) {
  const now = performance.now()
  const delta = e.deltaY > 0 ? -1 : 1
  const fast = now - lastWheelTime < 120
  lastWheelTime = now
  commitTarget(targetIndex.value + delta * (fast ? 0.7 : 1))
}

function onKeydown(e) {
  if (e.key === 'ArrowDown') commitTarget(targetIndex.value + 1)
  if (e.key === 'ArrowUp') commitTarget(targetIndex.value - 1)
  if (e.key === 'Enter') {
    const post = posts[Math.round(currentIndex.value)]
    router.go('posts/' + post?.md_url)
  }
}

onMounted(() => {
  const focus = document.querySelector('.osu-list')
  focus?.focus()
})

onBeforeUnmount(() => {
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped lang="scss">
.osu-list {
  width: 100%;
  height: 100%;
  outline: none;
  color: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}

.list-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-container {
  position: relative;
  width: min(760px, 72vw);
  height: 440px;
}

.song-list {
  position: relative;
  width: 100%;
  height: 100%;
}

.song-item {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  padding: 10px 14px 10px 10px;
  transform-origin: left center;
  border: 0;
  border-radius: 22px;
  color: inherit;
  background: rgba(12, 17, 31, 0.56);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  text-align: left;
  transition: background 180ms ease, box-shadow 180ms ease, filter 180ms ease;
  will-change: transform, opacity, filter;

  &:hover {
    background: rgba(20, 27, 46, 0.78);
  }

  &:active {
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0 20px 44px rgba(0, 0, 0, 0.34), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
}

.title {
  font-size: 22px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>