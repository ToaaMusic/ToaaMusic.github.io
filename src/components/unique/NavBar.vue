<template>
  <nav :class="{ sticky: isSticky , hide: isHidden }" class="navbar">
    <div class="nav-inner">
      <div class="nav-left">
        <RouterLink class="logo" to="/home">ToaaM.</RouterLink>
        <IconCard :icon="FolderIcon">
          <RouterLink class="router-link" to="/projects">项目</RouterLink>
        </IconCard>
        <IconCard :icon="NotesIcon">
          <RouterLink class="router-link" to="/">文章</RouterLink>
        </IconCard>
      </div>

      <div class="nav-right">
        <div class="searchbar">

        </div>
        <transition name="bounce-in" appear>
          <Avatar v-if="scrollStore.showAvatarInNavbar" :size="'sm'" />
        </transition>
        <!-- <div class="more-wrapper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
          <MenuIcon :hovered="isHover"/>
          <transition name="fade-slide">
            <ul class="dropdown-menu" v-if="isHover" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
              <li>退出登录</li>
            </ul>
          </transition>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, computed} from 'vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import { useScrollStore } from '@/stores/scrollStore'
import Avatar from '../Avatar.vue'
import NotesIcon from '@/components/icons/NotesIcon.vue'
import IconCard from '../IconCard.vue'
import FolderIcon from '../icons/FolderIcon.vue'
const scrollStore = useScrollStore()

const isHover = ref(false)
let hoverTimeout: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = () => {
  if (hoverTimeout) clearTimeout(hoverTimeout)
  isHover.value = true
}

const handleMouseLeave = () => {
  hoverTimeout = setTimeout(() => {
    isHover.value = false
  }, 200) // 200ms 缓冲时间
}



const router = useRouter()

const isSticky = ref(false)
const isHidden = ref(false)

let lastScrollY = window.scrollY

const checkScroll = () => {
  const currentScroll = window.scrollY
  const delta = currentScroll - lastScrollY

  // 设置 sticky 状态
  isSticky.value = currentScroll > 50

  // 设置隐藏状态
  if (delta < -3 && currentScroll > 300) {
    isHidden.value = true
  } else if (delta > 3 || currentScroll <= 300) {
    isHidden.value = false
  }

  lastScrollY = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1200px;

  padding: 0.6rem 1.2rem;
  margin: 0 auto;

  z-index: 10;
  transition: background-color 0.3s ease;
  background-color: var(--main-bg);
  /* background-color: rgba(255, 255, 255, 0); */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.308);
  box-sizing: border-box;
  border-radius: 0 0 24px 24px;

  display: flex;
  justify-content:center;

  transition: background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.navbar.sticky {
  background: var(--main-transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.navbar.hide {
  transform: translateY(-100%); /* 向上隐藏 */
  opacity: 0;
  pointer-events: none;
}

.nav-inner{
  /* max-width: 1200px; */
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  max-height: 24px;
  justify-content: space-between; /* 左右两边对齐 */
  align-items: center;
}

.nav-left, .nav-right {
  flex-shrink: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  white-space: nowrap; 
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--main);
  /* color: #A6D6D6; */
  text-decoration: none;
  margin-right: 1rem;
}

.avatar-wrapper{
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.2s;
}

.avatar:hover {
  transform: scale(1.05);
}

.more-wrapper{
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%; 
  padding: 0;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  right: 0; 
  top: 45px;

  background: var(--main-transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  border-radius: 8px;
  list-style: none;
  padding: 0.5rem 0;
  z-index: 20;
  min-width: 120px;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-menu li:hover {
  background-color: transparent;
}

/* 动画 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

</style>
