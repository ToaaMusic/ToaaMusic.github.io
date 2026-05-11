<template>
  <div class="app-container">

    <div class="center-container">
      <div class="layout">
        <Card3D>
          <Avatar class="profile"
            :img="'https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg'"
            :name="'ToaaM'" 
            @click="() => { router.go('/posts/') }"/>
        </Card3D>
        <SmoothList v-if="mode === 'postList'" />
      </div>
    </div>

    <Footer v-if="mode !== 'home'"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRouter, useRoute } from 'vitepress'
import { Card3D, Avatar } from 'ui'
import Footer from './components/Footer.vue'
import SmoothList from './components/SmoothList.vue'

const { frontmatter } = useData()
const router = useRouter()
const route = useRoute()

const mode = computed(() => {
  if (route.path === '/') return 'home'
  if (route.path === '/posts/')
    return 'postList'
  if (route.path.startsWith('/posts/'))
    return 'post'

  return 'home'
})

const handleNavigate = (path: string) => {
  router.go(path)
}
</script>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.center-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.layout {
  display: flex;
}
</style>
