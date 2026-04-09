<template>
  <Teleport to="body">
    <div
      class="devtools-toast bounce-in"
      :class="{ 'visible': visible }"
      @click="goToGithub"
    >
      (￣▽￣;)ゞ没必要啦，点我前往Git仓库吧~
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 1. 定义常量，TS 会自动推断类型
const GITHUB_URL: string = 'https://github.com/toaamusic/toaamusic.github.io'
const THRESHOLD: number = 160

const visible = ref<boolean>(false)
let prevOpen: boolean = false
// 存储定时器 ID，用于销毁
let timer: ReturnType<typeof setInterval> | null = null

// 2. 函数添加返回类型注解
function goToGithub(): void {
  window.open(GITHUB_URL, '_blank')
}

onMounted(() => {
  // 3. 这里的检测逻辑在 TS 中运行良好
  timer = setInterval(() => {
    const widthDiff: number = window.outerWidth - window.innerWidth
    const heightDiff: number = window.outerHeight - window.innerHeight
    const isOpen: boolean = widthDiff > THRESHOLD || heightDiff > THRESHOLD

    if (isOpen !== prevOpen) {
      visible.value = isOpen
      prevOpen = isOpen
    }
  }, 500) // 适当调高检测频率（如500ms），减少浏览器负担
})

// 4. TS 最佳实践：在组件卸载时清理定时器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.devtools-toast {
  position: fixed;
  top: 20px;
  left: -400px; /* 初始隐藏在屏幕外 */
  background: #242424;
  color: #fff;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 8px;
  z-index: 9999;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 添加一点动画效果 */
}

.devtools-toast.visible {
  left: 20px;
}

/* 简单的入场动画补丁 */
.bounce-in {
  border: 1px solid #42b983;
}
</style>