<template>
  <div class="container">

    <NavBar v-if="showNavBar" :config="navbarConfig" @navigate="handleNavigate" />

    <div class="content">
      <div v-if="frontmatter.layout === 'post'">
        <PostLayout />
      </div>
      <Content v-else />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import { NavBar, IconCard, FolderIcon, NotesIcon, NavbarConfigClass } from 'ebrain-ui-vue'
import { inertialScrolling } from './components/scripts/inertialScrolling'
import Footer from './components/Footer.vue'
import PostLayout from './components/PostLayout.vue'

const { frontmatter } = useData()
const route = useRoute()
const router = useRouter()

const showNavBar = ref(true)
const isPadding = ref(false)
const showEffect = ref(true)

const handleNavigate = (path: string) => {
  router.go(path)
}

const navbarConfig = ref(new NavbarConfigClass({
  logo: {
    text: 'ToaaM.',
    href: '/',
  },
  items: [
    { name: '项目', path: '/projects', type: 'internal', icon: FolderIcon },
    { name: '文章', path: '/posts', type: 'internal', icon: NotesIcon },
  ],
  avatar: {
    visible: false,
  },
  transparentAtTop: true,
}))

// 防抖的滚动处理
let scrollTimeout: number | null = null
const handleScroll = () => {
  if (typeof window === 'undefined') return
  navbarConfig.value.avatar.visible = window.scrollY > 200
}

const debouncedHandleScroll = () => {
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout)
  }
  scrollTimeout = requestAnimationFrame(handleScroll)
}

onMounted(() => {
  inertialScrolling({
    stepSize: 80,
    animationTime: 1000,
    frameRate: 144,
    keyboardSupport: true
  })

  window.addEventListener('scroll', debouncedHandleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll)
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout)
  }
})

watch(() => route.path, () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
})
</script>

<style scoped>
.container {
  min-height: 200vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

</style>
