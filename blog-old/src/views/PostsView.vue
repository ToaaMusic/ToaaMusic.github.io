<script setup lang="ts">
import { onMounted, computed, onBeforeUnmount, ref, nextTick } from 'vue'
import { usePostStore } from '@/stores/postStore'
import { useScrollStore } from '@/stores/scrollStore'
import { useRoute, useRouter } from 'vue-router'
import { useDevice } from '@/utils/useDevice'
import { List, Avatar, MoreIcon } from 'ebrain-ui'

const postStore = usePostStore()
const scrollStore = useScrollStore()
const { isMobile } = useDevice()
const route = useRoute()
const router = useRouter()

const triggerTop = ref(0)
const loading = ref(true)

const selectedTag = computed(() => route.query.tag as string | undefined)

const posts = computed(() => postStore.posts)

const filteredPosts = computed(() => {
  if (!selectedTag.value) return postStore.posts
  return postStore.posts.filter(post => post.tags?.includes(selectedTag.value as string))
})

const filterByTag = (tag: string) => {
  router.replace({ query: { ...route.query, tag } })
}

const goToPost = (post: { md_url: any }) => {
  document.startViewTransition(() => {
    router.push(`/post/${post.md_url}`)
  })
}

const searchPosts = () => {
  console.log('搜索功能尚未实现')
}

onMounted(async () => {
  await nextTick()

  const trigger = document.getElementById('trigger-element')
  if (trigger) {
    triggerTop.value = trigger.getBoundingClientRect().top + window.scrollY
  }
  window.addEventListener('scroll', handleScroll)
})
const handleScroll = () => {
  const scrollY = window.scrollY
  scrollStore.updateAvatarVisibility(scrollY >= triggerTop.value - 60)
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  scrollStore.updateAvatarVisibility(false)
})

onMounted(async () => {
  loading.value = true
  await postStore.fetchPosts()
  postStore.initRealtime()
  loading.value = false
})

const tagCounts = computed(() => {
  const counts: Record<string, number> = {}
  postStore.posts.forEach(post => {
    post.tags?.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1
    })
  })
  return counts
})
const minCount = computed(() => Math.min(...Object.values(tagCounts.value)))
const maxCount = computed(() => Math.max(...Object.values(tagCounts.value)))

const getFontSize = (count: number) => {
  // 最小 0.8rem，最大 1.8rem，线性映射
  const min = 0.8, max = 1.8
  if (minCount.value === maxCount.value) return `${(min + max) / 2}rem`
  const scale = (count - minCount.value) / (maxCount.value - minCount.value)
  return `${min + scale * (max - min)}rem`
}

</script>

<template>
  <div class="posts-parent">
    <section class="content">
      <div class="morebtn">
        <button class="svgbtn" target="_blank" rel="noopener noreferrer">
          <MoreIcon />
        </button>
      </div>
      <div class="content-inner" :class="{ expanded: scrollStore.showAvatarInNavbar }">
        <div class="content-hide">
          <div class="packs">

          </div>
        </div>
        <div class="content-main">
          <List :items="filteredPosts" :loading="loading" @click-item="goToPost" :itemKey="(item: any) => item.id" />
        </div>
        <div class="side">
          <transition name="bounce-out">
            <Avatar v-show="!scrollStore.showAvatarInNavbar || isMobile" id="trigger-element" />
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
