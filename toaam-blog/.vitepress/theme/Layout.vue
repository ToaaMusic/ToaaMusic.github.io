<template>
  <div class="app-container">
    <div class="scene" :class="mode">
      <!-- Avatar -->
      <div class="avatar-wrap">
        <div @click="handleAvatarClick">
          <Avatar class="profile"
            :img="'https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg'"
            :name="'ToaaM'" />
        </div>
      </div>

      <!-- List -->
      <div class="list-wrap">
        <SmoothList />
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vitepress'
import { Card3D, Avatar } from 'ui'

import Footer from './components/Footer.vue'
import SmoothList from './components/SmoothList.vue'

const router = useRouter()
const route = useRoute()

const mode = computed(() => {
  if (route.path === '/') return 'home'
  if (route.path === '/posts/') return 'postList'
  if (route.path.startsWith('/posts/')) return 'post'
  return 'home'
})

function handleAvatarClick() {
  if (mode.value === 'home') {
    router.go('/posts/')
    return
  }

  router.go('/')
}
</script>

<style scoped lang="scss">
.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

/* =========================
   Scene
========================= */

.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
}

/* =========================
   Avatar
========================= */

.avatar-wrap {
  position: absolute;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%) scale(1);

  z-index: 3;

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

/* =========================
   List
========================= */

.list-wrap {
  position: absolute;

  left: calc(50% + 80px);
  top: 50%;

  width: 520px;
  max-width: calc(100vw - 180px);

  transform:
    translateY(-50%) translateX(-40px);

  opacity: 0;

  pointer-events: none;

  transition:
    opacity .42s ease,
    transform .62s cubic-bezier(.2, .8, .2, 1);

  will-change:
    transform,
    opacity;
}

/* =========================
   HOME
========================= */

.scene.home {
  .avatar-wrap {
    left: 50%;

    transform:
      translate(-50%, -50%) scale(1);
  }

  .list-wrap {
    opacity: 0;

    transform:
      translateY(-50%) translateX(-40px);

    pointer-events: none;
  }
}

/* =========================
   POST LIST
========================= */

.scene.postList {
  .avatar-wrap {
    left: calc(50% - 220px);

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

/* =========================
   POST
========================= */

.scene.post {
  .avatar-wrap {
    left: 32px;
    top: 32px;

    transform: scale(.58);

    transform-origin: top left;
  }

  .list-wrap {
    opacity: 0;

    transform:
      translateY(-50%) translateX(40px);

    pointer-events: none;
  }
}

/* =========================
   Footer
========================= */

:deep(footer) {
  position: relative;
  z-index: 10;
}

/* =========================
   Mobile
========================= */

@media (max-width: 900px) {
  .scene.postList {
    .avatar-wrap {
      left: 50%;
      top: 88px;

      transform:
        translateX(-50%) scale(.82);
    }

    .list-wrap {
      left: 50%;
      top: calc(50% + 80px);

      width: calc(100vw - 32px);

      transform:
        translateX(-50%) translateY(-50%);
    }
  }

  .scene.post {
    .avatar-wrap {
      left: 16px;
      top: 16px;

      transform: scale(.5);
    }
  }
}
</style>