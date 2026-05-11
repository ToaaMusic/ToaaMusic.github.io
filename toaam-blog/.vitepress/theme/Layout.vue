<template>
  <div class="app-container">
    <div class="scene" :class="mode">
      <!-- Avatar -->
      <div class="avatar-wrap">
        <div @click="handleAvatarClick">
          <Avatar
            class="profile"
            :img="'https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg'"
            :name="'ToaaM (施工中)'"
          />
        </div>
      </div>

      <!-- List -->
      <div
        v-if="mode === 'postList'"
        class="list-wrap"
      >
        <SmoothList />
      </div>

      <!-- Post -->
      <Post
        v-if="mode === 'post'"
        class="post-view"
      />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vitepress'
import { Avatar } from 'ui'

import Footer from './components/Footer.vue'
import SmoothList from './components/SmoothList.vue'
import Post from './components/Post.vue'

const router = useRouter()
const route = useRoute()

const mode = computed(() => {
  const path = route.path

  if (path === '/') return 'home'

  if (path === '/posts/' || path === '/posts') {
    return 'postList'
  }

  if (path.startsWith('/posts/') && path !== '/posts/') {
    return 'post'
  }

  return 'home'
})

function handleAvatarClick() {
  if (mode.value === 'home') {
    router.go('/posts/')
    return
  }

  if (mode.value === 'postList') {
    router.go('/')
    return
  }

  if (mode.value === 'post') {
    router.go('/posts/')
    return
  }

  router.go('/')
}
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow-x: clip;
}

.scene {
  position: relative;

  flex: 1;

  width: 100%;
}

// ========================
// avatar
// ========================

.avatar-wrap {
  position: absolute;

  left: 50%;
  top: 50%;

  z-index: 3;

  transform:
    translate(-50%, -50%) scale(1);

  transition:
    left .72s cubic-bezier(.2, .8, .2, 1),
    top .72s cubic-bezier(.2, .8, .2, 1),
    transform .72s cubic-bezier(.2, .8, .2, 1),
    opacity .35s ease;

  will-change:
    left,
    top,
    transform;
}

// ========================
// list
// ========================

.list-wrap {
  position: absolute;

  left: calc(50% + 80px);
  top: 50%;

  width: 520px;
  max-width: calc(100vw - 180px);

  opacity: 0;

  transform:
    translateY(-50%) translateX(-40px);

  pointer-events: none;

  transition:
    opacity .42s ease,
    transform .62s cubic-bezier(.2, .8, .2, 1);

  will-change:
    transform,
    opacity;
}

// ========================
// post
// ========================

.post-view {
  position: relative;

  width: 100%;

  opacity: 0;

  transform:
    translateY(24px) scale(.98);

  pointer-events: none;

  transition:
    opacity .42s ease,
    transform .72s cubic-bezier(.2, .8, .2, 1);

  will-change:
    opacity,
    transform;
}

// ========================
// home
// ========================

.scene.home {
  min-height: 100vh;

  .avatar-wrap {
    left: 50%;
    top: 50%;

    transform:
      translate(-50%, -50%) scale(1);
  }
}

// ========================
// post list
// ========================

.scene.postList {
  min-height: 100vh;

  .avatar-wrap {
    left: calc(50% - 220px);
    top: 50%;

    transform:
      translate(-50%, -50%) scale(.96);
  }

  .list-wrap {
    opacity: 1;

    transform:
      translateY(-50%) translateX(0);

    pointer-events: auto;
  }
}

// ========================
// post
// ========================

.scene.post {
  padding-top: 96px;

  .avatar-wrap {
    position: fixed;

    left: 32px;
    top: 32px;

    transform: scale(.58);
    transform-origin: top left;
  }

  .post-view {
    opacity: 1;

    transform:
      translateX(0)
      translateY(0)
      scale(1);

    pointer-events: auto;
  }
}

// ========================
// footer
// ========================

:deep(footer) {
  position: relative;
  z-index: 10;
}

// ========================
// mobile
// ========================

@media (max-width: 900px) {
  .scene.postList {
    .avatar-wrap {
      left: 50%;
      top: 88px;

      transform:
        translateX(-50%)
        scale(.82);
    }

    .list-wrap {
      left: 50%;
      top: calc(50% + 80px);

      width: calc(100vw - 32px);

      transform:
        translateX(-50%)
        translateY(-50%);
    }
  }

  .scene.post {
    padding-top: 80px;

    .avatar-wrap {
      left: 16px;
      top: 16px;

      transform: scale(.5);
    }

    .post-view {
      width: 100%;

      padding:
        0 20px 40px;

      box-sizing: border-box;

      overflow-x: hidden;
    }
  }
}
</style>