<template>
  <div class="app-container">
    <!-- <ClientOnly>
      <Bge v-if="showEffect" />
    </ClientOnly> -->

    <NavBarA v-if="showNavBar" />

    <div :class="['main-content', { 'padding': isPadding }]">
      <div v-if="frontmatter.layout === 'post'">
        <PostLayout />
      </div>
      <Content v-else />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { NavBarA, Bge } from 'ebrain-ui-vue'
import { inertialScrolling } from './components/scripts/inertialScrolling'
import Footer from './components/Footer.vue'
import PostLayout from './components/PostLayout.vue'

const { frontmatter } = useData()
const route = useRoute()

const showNavBar = ref(true)
const isPadding = ref(false)
const showEffect = ref(true)

onMounted(() => {
  inertialScrolling({
    stepSize: 80,
    animationTime: 1000,
    frameRate: 144,
    keyboardSupport: true
  })
})

watch(() => route.path, () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
})
</script>

<style scoped>
.app-container {
  min-height: 200vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
