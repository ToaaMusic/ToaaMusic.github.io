<template>
  <div class="container">

    <SmoothList/>
    <div class="content">
      <Post v-if="frontmatter.layout === 'post'" />
      <Content v-else />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRouter, useRoute } from 'vitepress'
import { Card3D } from 'ui'
import Footer from './components/Footer.vue'
import Post from './components/Post.vue'
import SmoothList from './components/SmoothList.vue'

const { frontmatter } = useData()
const router = useRouter()
const route = useRoute()

const mode = computed(() => {
  if (route.path === '/') return 'home'
  if (route.path === '/posts/')
    return 'list'
  if (route.path.startsWith('/posts/'))
    return 'post'

  return 'home'
})

const handleNavigate = (path: string) => {
  router.go(path)
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
