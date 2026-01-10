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

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const GITHUB_URL = 'https://github.com/toaamusic/toaamusic.github.io' // <-- 改这里！

const THRESHOLD = 160
let prevOpen = false

function goToGithub() {
  window.open(GITHUB_URL, '_blank')
}

onMounted(() => {
  setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth
    const heightDiff = window.outerHeight - window.innerHeight
    const isOpen = widthDiff > THRESHOLD || heightDiff > THRESHOLD

    if (isOpen !== prevOpen) {
      visible.value = isOpen
      prevOpen = isOpen
    }
  }, 100)
})
</script>

<style scoped>
.devtools-toast {
  position: fixed;
  top: 20px;
  left: -400px;
  background: #242424;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 8px;
  z-index: 9999;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.devtools-toast.visible {
  left: 20px;
}
</style>
