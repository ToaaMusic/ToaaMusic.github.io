<template>

  <div class="app-container">
    <Bge v-if="showEffect" />
    <NavBar v-if="showNavBar" />
    <div :class="['main-content', { 'padding': isPadding }]">
      <RouterView />
    </div>
    <div class="footer">
      <p>本站所有资源均来自网络，且仅用于学习用途，未进行商业行为。如有侵权，请联系删除。</p>
      <div>
        <a href="https://icp.gov.moe/?keyword=20251616" target="_blank">萌ICP备20251616号</a>
      </div>
      <p>© 2025-2026 ToaaM. All rights reserved.</p>
    </div>

    <!-- <ThemeSwitcher /> -->
    <!-- <FooterBar /> -->
    <!-- <Toast /> -->
    <!-- <MusicPlayer/> -->
  </div>
</template>


<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { NavBar, FooterBar, Bge, ThemeSwitcher, Toast, MusicPlayer } from 'ebrain-ui'
import { inertialScrolling } from './composables/inertialScrolling'
inertialScrolling({
  stepSize: 80,
  animationTime: 1000,
  frameRate: 144,
  keyboardSupport: true
})

const showNavBar = ref(true)

const isPadding = ref(false)

const showEffect = ref(false)

const route = useRoute()
watch(route, () => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})

onMounted(() => {
})

</script>

<style scoped>
.app-container {
  min-height: 200vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: 3rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.9rem;
  margin: 0.5rem 0.5rem;
}

.main-content {
  flex: 1;
  padding-top: 0;
}

.main-content.padding {
  padding-top: 60px;
  flex: 1;
}

/* 🚫 禁用进入动画 */
.page-leave-only-enter-from,
.page-leave-only-enter-to,
.page-leave-only-enter-active {
  opacity: 1;
  transform: none;
  transition: none;
}

/* ✅ 只处理离开动画 */
.page-leave-only-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-only-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-leave-only-leave-active {
  transition: all 0.4s ease;
}
</style>
