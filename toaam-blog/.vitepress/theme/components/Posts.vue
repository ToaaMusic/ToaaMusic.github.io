<script setup lang="ts">
import { onMounted, computed, onBeforeUnmount, ref, nextTick } from 'vue'
import { useData, useRouter } from 'vitepress'
import { useDevice } from './scripts/useDevice'
import { List, Avatar, MoreIcon } from 'ui'
import type { CardData } from 'ui'
// @ts-ignore
import { data as allPosts } from './scripts/posts.data'

const { isMobile } = useDevice()
const router = useRouter()

const showAvatarInNavbar = ref(false)
const triggerTop = ref(0)
const loading = ref(false)
const selectedTag = ref<string | undefined>(undefined)

const filteredPosts = computed(() => {
  if (!selectedTag.value) return allPosts
  return allPosts.filter((post: CardData) => post.tags?.includes(selectedTag.value as string))
})

const filterByTag = (tag: string) => {
  const currentPath = window.location.pathname
  router.go(`${currentPath}?tag=${tag}`)
}

const goToPost = (post : CardData) => {
  router.go(`/posts/${post.md_url}`)
}

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  allPosts.forEach((post: CardData) => {
    post.tags?.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1
    })
  })
  return counts
})

const minCount = computed(() => {
  const values = Object.values(tagCounts.value)
  return values.length ? Math.min(...values) : 0
})

const maxCount = computed(() => {
  const values = Object.values(tagCounts.value)
  return values.length ? Math.max(...values) : 0
})

const getFontSize = (count: number) => {
  const min = 0.8, max = 1.8
  if (minCount.value === maxCount.value || maxCount.value === 0) {
    return `${(min + max) / 2}rem`
  }
  const scale = (count - minCount.value) / (maxCount.value - minCount.value)
  return `${min + scale * (max - min)}rem`
}

const handleScroll = () => {
  const scrollY = window.scrollY
  showAvatarInNavbar.value = scrollY >= triggerTop.value - 60
}

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  selectedTag.value = params.get('tag') || undefined
  await nextTick()
  
  const trigger = document.getElementById('trigger-element')
  if (trigger) {
    triggerTop.value = trigger.getBoundingClientRect().top + window.scrollY
  }
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="posts-parent">
    <section class="content">
      <div class="morebtn">
        <button class="svgbtn" target="_blank" rel="noopener noreferrer">
          <MoreIcon />
        </button>
      </div>
      <div class="content-inner" :class="{ expanded: showAvatarInNavbar }">
        <div class="content-hide">
          <div class="packs">

          </div>
        </div>
        <div class="content-main">
          <List :items="filteredPosts" :loading="loading" @click-item="goToPost" :itemKey="(item: any) => item.id" />
        </div>
        <div class="side">
          <transition name="bounce-out">
            <Avatar v-show="!showAvatarInNavbar || isMobile" id="trigger-element" />
          </transition>

          <transition name="fade-slide">
            <div class="side-list">
              <h2 class="_before-line">Tags</h2>
              <div class="tag-cloud">
                <span v-for="(count, tag) in tagCounts" :key="tag" :style="{ fontSize: getFontSize(count) }"
                  class="tag-item" @click="filterByTag(tag)">
                  {{ '#' + tag }}
                </span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content {
  background-color: transparent;
  margin-top: 150px;
  height: 100;
  position: relative;
  z-index: 2;
  border-radius: 10px 10px 0 0;

}

.content-inner {
  display: grid;
  --col1: 0%;
  --col2: 1fr;
  --col3: 15%;
  grid-template-columns: var(--col1) var(--col2) var(--col3);
  position: relative;
  transition: grid-template-columns 0.4s ease;
  transition: all 0.4s ease;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
}

.content-inner.expanded {
  --col3: 0;
}

.morebtn:hover+.content-inner {
  --col1: 20%
}

.side {
  overflow: hidden;
  transition: opacity 0.2s ease;
  transition: all 0.4s ease;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -80px;
}

.content-main {
  transition: all 0.4s ease;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: -80px;
}

.content-headline {
  display: flex;
  flex-direction: row;
}

.search {
  margin-bottom: 0.5rem;
}

.content-hide {
  margin-top: -80px;
}

.packs {
  background-color: var(--main-border);
  min-height: 50%;
  position: sticky;
  top: 66 px;
  align-self: flex-start;
  border-radius: 10px;
}

.morebtn {
  /* display: none; */
  position: fixed;
  top: 66px;
  left: calc(50% - 600px - 60px);
  /* 600 = 1200/2; 60 是按钮距离内容的偏移 */
}


.side-list {
  /* position: sticky;
  top: 0; */
  background-color: var(--main-border);
  border-radius: 10px;
  padding: 1rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.tag-item {
  cursor: pointer;
  color: var(--main-text);
  transition: transform 0.2s, color 0.2s;
}

.tag-item:hover {
  color: var(--main-accent);
  transform: scale(1.1);
}


.side.hidden {
  max-width: 0;
  opacity: 0;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}

@media (max-width: 768px) {
  .content-inner {
    display: flex;
    flex-direction: column-reverse;
  }

  .side {
    align-items: stretch;
    overflow: initial;
    margin-top: 0;
    flex-direction: row-reverse;
  }

  .profile {
    margin-top: 0;
  }

  .side-list {
    flex: 1;
  }

  .content-main {
    margin-top: 0;
  }

}
</style>
