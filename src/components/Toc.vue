<template>
  <div class="toc" ref="tocContainer">
    <h2>锚点</h2>

    <!-- 高亮滑动块 -->
    <div
      v-if="highlightStyle"
      class="highlight-block"
      :style="highlightStyle"
    ></div>

    <div
      v-for="(heading, i) in headings"
      :key="heading.id"
      ref="tocItems"
      :class="['toc-item', { active: heading.id === activeId }]"
      :style="{ paddingLeft: `${(heading.level - 2) * 1}rem` }"
      @click="scrollToHeading(heading.id)"
    >
      {{ heading.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed, ref, watch, nextTick } from 'vue'
import { useScrollStore } from '@/stores/scrollStore'

const props = defineProps<{
  headings: { id: string; text: string; level: number }[]
}>()

const scrollStore = useScrollStore()
const activeId = computed(() => scrollStore.activeHeadingId)

const scrollToHeading = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 100,
      behavior: 'smooth',
    })
  }
}

// 滚动监听逻辑
const onScroll = () => {
  const scrollY = window.scrollY
  for (let i = props.headings.length - 1; i >= 0; i--) {
    const el = document.getElementById(props.headings[i].id)
    if (el && el.offsetTop - 120 <= scrollY) {
      scrollStore.setActiveHeading(props.headings[i].id)
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

// 高亮滑动块的样式定位
const tocItems = ref<HTMLElement[]>([])
const tocContainer = ref<HTMLElement | null>(null)
const highlightStyle = ref<Record<string, string> | null>(null)

const updateHighlight = () => {
  nextTick(() => {
    const index = props.headings.findIndex(h => h.id === activeId.value)
    const item = tocItems.value[index]
    if (item && tocContainer.value) {
      const offsetTop = item.offsetTop
      const height = item.offsetHeight
      highlightStyle.value = {
        transform: `translateY(${offsetTop}px)`,
        height: `${height}px`,
        width: `calc(100% - 1rem)`, // 适配内边距
      }
    } else {
      highlightStyle.value = null
    }
  })
}

// 监听 activeId 变化，更新高亮位置
watch(activeId, updateHighlight)
onMounted(updateHighlight)
</script>

<style scoped>
.toc {
  position: relative;
  font-size: 0.9rem;
  background-color: var(--main-border);
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
}

.toc-item {
  position: relative;
  z-index: 1;
  margin: 0.5rem 0;
  padding: 0.4rem 0rem;
  cursor: pointer;
  transition: color 0.3s;
  border-radius: 8px;
}
.toc-item.active {
  font-weight: bold;
  color: var(--accent-color);
}

/* 滑动背景块 */
.highlight-block {
  position: absolute;
  left: 0.5rem;
  top: 0;
  background-color: var(--main-hover);
  border-radius: 10px;
  transition: transform 0.3s ease, height 0.3s ease;
  z-index: 0;
  pointer-events: none;
}
</style>
