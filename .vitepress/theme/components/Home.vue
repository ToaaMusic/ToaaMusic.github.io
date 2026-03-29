<template>
  <div class="home-container">
    <div class="noise-bg"></div>

    <section class="hero-section">
      <h1 class="main-title reveal-text">
        <span class="line-1">Hello, I'm</span>
        <span class="line-2 highlight">
          YourName<span class="dot">.</span>
        </span>
      </h1>

      <p class="subtitle animate-fade-in">
        专注于 <span class="typewriter">前端探索 / 交互设计 / 独立开发</span>
      </p>

      <div class="social-links animate-fade-in-delay">
        <a href="https://github.com/your-username" target="_blank" class="magnetic-item">GitHub</a>
        <a href="/posts" class="magnetic-item">Archive</a>
        <a href="/about" class="magnetic-item">About</a>
      </div>
    </section>

    <hr class="divider animate-fade-in-delay-2" />

    <section class="recent-posts animate-fade-in-delay-2">
      <h2 class="section-label">Latest Writing</h2>
      <ul class="post-list">
        <li v-for="(post, index) in posts.slice(0, 5)" :key="post.url" class="post-item" :style="{ '--idx': index }">
          <a :href="post.url">
            <span class="post-title">{{ post.title }}</span>
            <span class="post-date">{{ post.date }}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// 接收外部传来的文章数据
const props = defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})

// 4. JS：磁性悬浮效果（Magnetic Hover）
onMounted(() => {
  const items = document.querySelectorAll('.magnetic-item');
  items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = item;
      const move = 8; // 移动幅度

      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      item.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = ''; // 恢复原位
    });
  });
})
</script>

<style scoped>
/* ==============================
   核心布局 & 变量
   ============================== */
.home-container {
  --text-color-rich: var(--vp-c-text-1);
  --text-color-muted: var(--vp-c-text-2);
  --accent-color: var(--vp-c-brand-1);

  max-width: 900px;
  margin: 0 auto;
  padding: 120px 24px 80px;
  position: relative; /* 为噪点背景定位 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* ==============================
   1. 高级：噪点背景 (Noise)
   ============================== */
.noise-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  /* 使用一个微小的 base64 噪点图片，或者使用 CSS 渐变模拟 */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3%3E");
  opacity: 0.04; /* 极其微弱 */
  pointer-events: none; /* 不挡鼠标 */
  z-index: -1;
}
:root.dark .noise-bg { opacity: 0.06; } /* 暗色模式稍强一点 */


/* ==============================
   Hero Section & 大标题
   ============================== */
.hero-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}

.main-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem); /* 响应式字号 */
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin-bottom: 30px;
  color: var(--text-color-rich);
}

.main-title .line-1,
.main-title .line-2 {
  display: block;
}

.highlight {
  color: var(--accent-color);
  position: relative;
}

.main-title .dot {
  color: var(--text-color-rich);
}

/* ==============================
   2. 高级：开场蒙版动画 (Text Reveal)
   原理：利用 clip-path 或 mask-image 从下往上扫掠
   ============================== */
.reveal-text span {
  animation: text-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); /* 最终状态 */
}

.reveal-text .line-1 {
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); /* 初始状态（隐藏） */
}

.reveal-text .line-2 {
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); /* 初始状态（隐藏） */
  animation-delay: 0.2s; /* 这一行稍晚一点点显现 */
}

@keyframes text-reveal {
  0% {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transform: translateY(20px);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translateY(0);
  }
}

/* ==============================
   副标题与社交链接
   ============================== */
.subtitle {
  font-size: 1.25rem;
  color: var(--text-color-muted);
  margin-bottom: 50px;
  font-weight: 400;
}

/* 简单的淡入 */
.animate-fade-in {
  animation: fade-in 1s ease-out 1.2s both; /* 在大标题动画完成后开始 */
}
.animate-fade-in-delay {
  animation: fade-in 1s ease-out 1.4s both;
}
.animate-fade-in-delay-2 {
  animation: fade-in 1s ease-out 1.6s both;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.social-links {
  display: flex;
  gap: 24px;
  font-size: 1rem;
}

.social-links a {
  color: var(--text-color-rich);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  padding: 4px 8px;
  margin-left: -8px;
  border-radius: 4px;
  /* 5. 高级：磁性效果需要 transition transform */
  display: inline-block;
  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), color 0.3s ease;
}

.social-links a:hover {
  color: var(--accent-color);
}

/* ==============================
   Latest Posts (文章列表)
   ============================== */
.divider {
  margin: 80px 0 40px;
  border: 0;
  border-top: 1px solid var(--vp-c-divider);
}

.section-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-color-muted);
  margin-bottom: 30px;
}

.post-item {
  list-style: none;
  margin-bottom: 12px;
  /* 准备进行列表入场动画 */
  opacity: 0;
  animation: fade-in 0.8s ease-out both;
  /* 利用 CSS 变量和 calc 实现错峰动画 */
  animation-delay: calc(1.8s + var(--idx) * 0.1s);
}

.post-item a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 16px 20px;
  background: transparent;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.post-item a:hover {
  background-color: var(--vp-c-bg-soft);
  transform: translateX(5px); /* 悬浮时横向微动 */
}

.post-title {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color-rich);
  transition: color 0.3s ease;
}

.post-item:hover .post-title {
  color: var(--accent-color);
}

.post-date {
  font-family: var(--vp-font-family-mono); /* 使用 VitePress 等宽字体 */
  color: var(--text-color-muted);
  font-size: 0.9rem;
}

/* 响应式调整 */
@media (max-width: 640px) {
  .home-container { padding: 80px 20px; }
  .post-item a { flex-direction: column; align-items: flex-start; gap: 4px; }
  .post-date { font-size: 0.8rem; }
}
</style>