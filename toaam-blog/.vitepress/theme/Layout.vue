<template>
  <div class="container">
    <NavBar v-if="frontmatter.layout !== 'home'" :config="navbarConfig" @navigate="handleNavigate" />

    <div class="content">
      <Post v-if="frontmatter.layout === 'post'" />
      <Content v-else />
    </div>

    <Footer v-if="frontmatter.layout !== 'home'" style="margin-top: 3rem;" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData, useRouter } from 'vitepress'
import { NavBar, FolderIcon, NotesIcon } from 'ui'
import { inertialScrolling } from './components/scripts/inertialScrolling'
import Footer from './components/Footer.vue'
import Post from './components/Post.vue'

const { frontmatter } = useData()
const router = useRouter()

const navbarConfig = ref({
  logo: {
    text: 'ToaaM.',
    href: '/',
  },
  items: [
    { name: '项目', path: '/projects', type: 'internal', icon: FolderIcon },
    { name: '文章', path: '/posts', type: 'internal', icon: NotesIcon },
  ],
  avatar: {
    visible: true,
  },
  transparentAtTop: true,
})

const handleNavigate = (path: string) => {
  router.go(path)
}

// onMounted(() => {
//   inertialScrolling({
//     stepSize: 80,
//     animationTime: 1000,
//     frameRate: 144,
//     keyboardSupport: true
//   })
// })
</script>

<style scoped>
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
