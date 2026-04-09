<template>
  <nav :class="{ sticky: isSticky, hide: isHidden, 'at-top': effectiveConfig.transparentAtTop && !isSticky }" class="navbar">
    <div class="nav-inner">
      <!-- Left slot -->
      <div class="nav-left">
        <slot name="left">
          <template v-if="effectiveConfig.logo">
            <Link class="logo" :to="effectiveConfig.logo.href || '/'" :title="effectiveConfig.logo.alt" @navigate="$emit('navigate', effectiveConfig.logo.href || '/')">
              <img v-if="effectiveConfig.logo.image" :src="effectiveConfig.logo.image" :alt="effectiveConfig.logo.alt || effectiveConfig.logo.text" />
              <span v-else>{{ effectiveConfig.logo.text || 'Logo' }}</span>
            </Link>
          </template>
        </slot>
      </div>

      <!-- Center slot -->
      <div class="nav-center">
        <slot name="center">
          <template v-if="effectiveConfig.items && effectiveConfig.items.length > 0">
            <div class="nav-items">
              <Link
                v-for="item in effectiveConfig.items"
                :key="item.name"
                :to="item.path"
                :type="item.type"
                :target="item.target"
                class="nav-item"
                @navigate="$emit('navigate', item.path)"
              >
                <component v-if="item.icon" :is="item.icon" class="nav-icon" />
                <span>{{ item.name }}</span>
              </Link>
            </div>
          </template>
        </slot>
      </div>

      <!-- Right slot -->
      <div class="nav-right">
        <slot name="right">
          <template v-if="effectiveConfig.search?.enabled">
            <div class="searchbar">
              <input type="text" :placeholder="effectiveConfig.search.placeholder || 'Search...'" />
            </div>
          </template>
          <transition name="bounce-in" appear>
            <Avatar
              v-if="effectiveConfig.avatar?.visible !== false"
              :size="'sm'"
              :img="effectiveConfig.avatar?.src"
              :avatarClick="effectiveConfig.avatar?.onClick"
            />
          </transition>
        </slot>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Avatar from '../Avatar.vue'
import Link from '../Link.vue'
import type { NavbarConfig } from '../../types/navbar'

const props = withDefaults(defineProps<{
  config?: NavbarConfig
  // legacy props for backward compatibility
  logoText?: string
  logoHref?: string
  showAvatar?: boolean
  transparentAtTop?: boolean
  avatarVisible?: boolean
}>(), {
  logoText: 'Home',
  logoHref: '/',
  showAvatar: true,
  transparentAtTop: true,
  avatarVisible: false
})

const emit = defineEmits<{
  navigate: [path: string]
}>()

// computed config merging legacy props and new config
const effectiveConfig = computed(() => {
  const cfg = props.config || {}
  const logo = {
    text: cfg.logo?.text ?? props.logoText,
    href: cfg.logo?.href ?? props.logoHref,
    image: cfg.logo?.image,
    alt: cfg.logo?.alt,
    position: cfg.logo?.position,
  }
  const avatar = {
    src: cfg.avatar?.src,
    alt: cfg.avatar?.alt,
    visible: cfg.avatar?.visible ?? props.avatarVisible,
    onClick: cfg.avatar?.onClick,
  }
  // if avatar.visible is still undefined (i.e., not set in config and avatarVisible is false default),
  // fallback to showAvatar prop
  if (avatar.visible === undefined) {
    avatar.visible = props.showAvatar
  }
  return {
    logo,
    items: cfg.items ?? [],
    avatar,
    search: cfg.search,
    stickyThreshold: cfg.stickyThreshold ?? 50,
    hideThreshold: cfg.hideThreshold ?? 300,
    transparentAtTop: cfg.transparentAtTop ?? props.transparentAtTop,
  }
})

const isSticky = ref(false)
const isHidden = ref(false)
let lastScrollY = 0

const checkScroll = () => {
  if (typeof window === 'undefined') return
  const currentScroll = window.scrollY
  const delta = currentScroll - lastScrollY
  isSticky.value = currentScroll > effectiveConfig.value.stickyThreshold
  if (delta < -3 && currentScroll > effectiveConfig.value.hideThreshold) {
    isHidden.value = true
  } else if (delta > 3 || currentScroll <= effectiveConfig.value.hideThreshold) {
    isHidden.value = false
  }
  lastScrollY = currentScroll
}

// 防抖版本的滚动处理
let scrollTimeout: number | null = null
const debouncedCheckScroll = () => {
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout)
  }
  scrollTimeout = requestAnimationFrame(checkScroll)
}

onMounted(() => {
  lastScrollY = window.scrollY
  checkScroll()
  window.addEventListener('scroll', debouncedCheckScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedCheckScroll)
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout)
  }
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
  background-color: var(--main-bg);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.308);
  box-sizing: border-box;
  border-radius: 0 0 24px 24px;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out, opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  /* 性能优化 */
  will-change: transform;
  transform: translateZ(0);
}

.navbar.sticky {
  background: var(--main-transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.navbar.at-top {
  background-color: transparent !important;
  backdrop-filter: none !important;
  box-shadow: none !important;
  -webkit-backdrop-filter: none !important;
}

.navbar.hide {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.nav-inner {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  max-height: 24px;
  justify-content: space-between;
  align-items: center;
}

.nav-left,
.nav-center,
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.nav-left {
  justify-content: flex-start;
}

.nav-center {
  justify-content: center;
}

.nav-right {
  justify-content: flex-end;
}

.nav-items {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;
}

.nav-item:hover {
  background-color: var(--main-border);
  color: var(--main);
}

.nav-icon {
  width: 1rem;
  height: 1rem;
}

.logo {
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--main);
  text-decoration: none;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  height: 1.5rem;
  width: auto;
}

.searchbar input {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  border: 1px solid var(--main-border);
  background-color: var(--main-bg);
  color: var(--text);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.searchbar input:focus {
  border-color: var(--main);
}
</style>
