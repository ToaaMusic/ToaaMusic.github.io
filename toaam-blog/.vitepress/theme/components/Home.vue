<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'
// @ts-ignore
import { data as allPosts } from './scripts/posts.data'
import type { CardData } from 'ui'

const router = useRouter()

const latestPosts = computed(() => allPosts.slice(0, 3) as CardData[])

const stats = computed(() => {
  const tags = new Set<string>()
  let earliest = Number.POSITIVE_INFINITY

  allPosts.forEach((post: CardData) => {
    post.tags?.forEach((tag) => tags.add(tag))
    const timestamp = new Date(post.created_at).getTime()
    if (!Number.isNaN(timestamp)) {
      earliest = Math.min(earliest, timestamp)
    }
  })

  const startYear = Number.isFinite(earliest) ? new Date(earliest).getFullYear() : new Date().getFullYear()

  return {
    posts: allPosts.length,
    tags: tags.size,
    startYear
  }
})

const notes = [
  {
    title: '写点有用的',
    body: '记录架构、前端、工具链和一些真正踩过坑之后留下来的判断。'
  },
  {
    title: '保留个人表达',
    body: '不把博客做成说明书，也不把它做成流水账，技术和日常都可以留下来。'
  },
  {
    title: '慢一点，但完整',
    body: '比起追热点，更想把一件事从动机、过程到结果写清楚。'
  }
]

const quickLinks = [
  { label: '文章归档', desc: '直接看全部文章', href: '/posts' },
  { label: '关于我', desc: '一页读完我的自我介绍', href: '/posts/toaam' },
  { label: '开发日志', desc: '看最近在做什么', href: '/posts/log' }
]

const formatDate = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}

const go = (href: string) => {
  router.go(href)
}
</script>

<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">TOAAM BLOG</p>
        <h1>把技术、项目和生活感受写成一块还算耐看的地方。</h1>
        <p class="lead">
          这里不是模板化的知识库，也不是只留结论的速记本。它更像一个持续生长的工作台，留下我做过的项目、学过的东西和没绕过去的问题。
        </p>

        <div class="hero-actions">
          <button class="action primary" @click="go('/posts')">进入文章列表</button>
          <button class="action secondary" @click="go('/posts/toaam')">认识一下我</button>
        </div>
      </div>

      <aside class="hero-panel">
        <div class="signal-card">
          <p class="signal-title">Current Signal</p>
          <div class="signal-grid">
            <div>
              <span class="signal-label">主题</span>
              <strong>前端 / 架构 / 设计</strong>
            </div>
            <div>
              <span class="signal-label">状态</span>
              <strong>持续更新中</strong>
            </div>
            <div>
              <span class="signal-label">文章</span>
              <strong>{{ stats.posts }} 篇</strong>
            </div>
            <div>
              <span class="signal-label">标签</span>
              <strong>{{ stats.tags }} 个</strong>
            </div>
          </div>
          <p class="signal-foot">
            从 {{ stats.startYear }} 年开始，慢慢把有价值的东西沉淀下来。
          </p>
        </div>
      </aside>
    </section>

    <section class="notes-grid">
      <article v-for="note in notes" :key="note.title" class="note-card">
        <p class="note-index">0{{ notes.indexOf(note) + 1 }}</p>
        <h2>{{ note.title }}</h2>
        <p>{{ note.body }}</p>
      </article>
    </section>

    <section class="content-grid">
      <div class="section-block latest-posts">
        <div class="section-head">
          <div>
            <p class="section-kicker">LATEST</p>
            <h2>最近更新</h2>
          </div>
          <button class="text-link" @click="go('/posts')">查看全部</button>
        </div>

        <div class="post-list">
          <article
            v-for="post in latestPosts"
            :key="post.id"
            class="post-card"
            @click="go(`/posts/${post.md_url}`)"
          >
            <p class="post-date">{{ formatDate(post.created_at as string) }}</p>
            <h3>{{ post.title }}</h3>
            <p class="post-summary">
              {{ post.summary || '这篇文章还没有摘要，但已经值得点进去看看。' }}
            </p>
            <div v-if="post.tags?.length" class="post-tags">
              <span v-for="tag in post.tags.slice(0, 3)" :key="tag">#{{ tag }}</span>
            </div>
          </article>
        </div>
      </div>

      <div class="side-column">
        <div class="section-block">
          <p class="section-kicker">QUICK ACCESS</p>
          <h2>从这里开始逛</h2>

          <div class="quick-links">
            <button
              v-for="item in quickLinks"
              :key="item.href"
              class="quick-link"
              @click="go(item.href)"
            >
              <span>{{ item.label }}</span>
              <small>{{ item.desc }}</small>
            </button>
          </div>
        </div>

        <div class="section-block contact-card">
          <p class="section-kicker">CONTACT</p>
          <h2>想联系我</h2>
          <p>
            可以直接发邮件，或者去我的 B 站主页找我。这个站会继续更新，不定期加新文章和实验页面。
          </p>
          <a href="mailto:toaamuteki@gmail.com">toaamuteki@gmail.com</a>
          <a href="https://space.bilibili.com/475928698" target="_blank" rel="noreferrer">
            bilibili / ToaaM
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  width: min(1180px, calc(100vw - 32px));
  margin: 0 auto;
  padding: 88px 0 72px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.8fr);
  gap: 28px;
  align-items: stretch;
}

.hero-copy,
.signal-card,
.note-card,
.section-block,
.post-card {
  border: 1px solid var(--home-line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015)),
    var(--home-panel);
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.14);
}

.hero-copy {
  position: relative;
  overflow: hidden;
  padding: 48px;
  border-radius: 32px;
}

.hero-copy::before,
.hero-copy::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  filter: blur(8px);
  pointer-events: none;
}

.hero-copy::before {
  inset: auto auto -80px -40px;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(187, 134, 252, 0.24), transparent 70%);
}

.hero-copy::after {
  top: -30px;
  right: -10px;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(98, 0, 238, 0.18), transparent 72%);
}

.eyebrow,
.section-kicker,
.signal-title,
.note-index,
.post-date {
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.eyebrow,
.section-kicker,
.signal-title,
.note-index {
  color: var(--home-muted);
}

.hero h1 {
  max-width: 10ch;
  margin-top: 14px;
  color: var(--main-text);
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: 1.02;
  font-weight: 700;
}

.lead {
  max-width: 56ch;
  margin-top: 20px;
  color: var(--home-copy);
  font-size: 1.05rem;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.action,
.text-link,
.quick-link,
.post-card {
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background-color 0.24s ease,
    box-shadow 0.24s ease;
}

.action {
  border: 0;
  border-radius: 999px;
  padding: 14px 22px;
  font: inherit;
  cursor: pointer;
}

.action.primary {
  color: #ffffff;
  background: linear-gradient(135deg, var(--main), #8e44ff);
}

.action.secondary {
  color: var(--main-text);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--home-line);
}

.action:hover,
.text-link:hover,
.quick-link:hover,
.post-card:hover {
  transform: translateY(-3px);
}

.hero-panel {
  display: flex;
}

.signal-card {
  width: 100%;
  border-radius: 32px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.signal-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 14px;
  margin-top: 32px;
}

.signal-label {
  display: block;
  margin-bottom: 8px;
  color: var(--home-muted);
  font-size: 0.82rem;
}

.signal-grid strong {
  color: var(--main-text);
  font-size: 1rem;
  font-weight: 600;
}

.signal-foot {
  margin-top: 34px;
  color: var(--home-copy);
  line-height: 1.8;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 22px;
}

.note-card {
  min-height: 220px;
  padding: 24px;
  border-radius: 24px;
}

.note-card h2,
.section-head h2,
.section-block h2 {
  margin-top: 14px;
  color: var(--main-text);
  font-size: 1.45rem;
  font-weight: 600;
}

.note-card p:last-child,
.contact-card p {
  margin-top: 14px;
  color: var(--home-copy);
  line-height: 1.85;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: 18px;
  margin-top: 18px;
}

.section-block {
  border-radius: 28px;
  padding: 28px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
}

.text-link {
  border: 1px solid var(--home-line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--main-text);
  border-radius: 999px;
  padding: 10px 16px;
  font: inherit;
  cursor: pointer;
}

.post-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}

.post-card {
  text-align: left;
  cursor: pointer;
  border-radius: 22px;
  padding: 22px;
}

.post-date {
  color: var(--home-muted);
  font-size: 0.76rem;
}

.post-card h3 {
  margin-top: 12px;
  color: var(--main-text);
  font-size: 1.22rem;
  font-weight: 600;
}

.post-summary {
  margin-top: 12px;
  color: var(--home-copy);
  line-height: 1.85;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.post-tags span {
  border: 1px solid var(--home-line);
  border-radius: 999px;
  padding: 6px 10px;
  color: var(--main-text);
  font-size: 0.84rem;
  background: rgba(255, 255, 255, 0.04);
}

.side-column {
  display: grid;
  gap: 18px;
}

.quick-links {
  display: grid;
  gap: 12px;
  margin-top: 22px;
}

.quick-link {
  display: grid;
  gap: 6px;
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid var(--home-line);
  background: rgba(255, 255, 255, 0.035);
  color: var(--main-text);
  text-align: left;
  font: inherit;
  cursor: pointer;
}

.quick-link span {
  font-size: 1rem;
  font-weight: 600;
}

.quick-link small {
  color: var(--home-copy);
  font-size: 0.9rem;
}

.contact-card a {
  display: inline-flex;
  width: fit-content;
  margin-top: 12px;
  color: var(--main-text);
  border-bottom: 1px solid transparent;
}

.contact-card a:hover {
  transform: none;
  border-color: currentColor;
}

@media (max-width: 960px) {
  .hero,
  .content-grid,
  .notes-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .home-page {
    width: min(100vw - 20px, 1180px);
    padding: 72px 0 56px;
  }

  .hero-copy,
  .signal-card,
  .section-block,
  .note-card,
  .post-card {
    padding: 22px;
    border-radius: 24px;
  }

  .hero-actions,
  .section-head {
    flex-direction: column;
    align-items: stretch;
  }

  .signal-grid {
    grid-template-columns: 1fr;
  }
}
</style>
