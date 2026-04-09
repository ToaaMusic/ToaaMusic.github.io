<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { Toc, IconCard, CategoryIcon, DateIcon, LikeIcon, CommentIcon } from 'ui'

const { frontmatter } = useData()

const headings = ref<{ id: string; text: string; level: number }[]>([])

onMounted(() => {
  const mdElement = document.querySelector('.md')
  if (mdElement) {
    headings.value = Array.from(
      mdElement.querySelectorAll('h1, h2, h3, h4')
    ).map(el => ({
      id: el.id,
      text: el.textContent || '',
      level: Number(el.tagName[1])
    }))
  }
})

const formatDate = (date: any) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="post-container">
    <div class="post-main">
      <div class="post">
        <div class="meta">
          <h1>{{ frontmatter.title }}</h1>
          <div class="meta-info">
            <IconCard :icon="CategoryIcon">
              <span>{{ frontmatter.class || '未分类' }}</span>
            </IconCard>

            <IconCard v-if="frontmatter.tags?.length">
              <span
                style="margin-left: 0.5rem;"
                v-for="tag in frontmatter.tags"
                :key="tag"
              >
                {{ '#' + tag }}
              </span>
            </IconCard>
          </div>

          <IconCard class="date" :icon="DateIcon">
            <span>{{ formatDate(frontmatter.date) }}</span>
          </IconCard>
        </div>

        <div class="md">
          <Content />
        </div>
      </div>

      <!-- <div class="comment">
        <h1 class="_before-line">评论(暂时关闭)</h1>
      </div> -->
    </div>

    <div class="post-side">
      <Toc :headings="headings"/>
      <div class="post-likes">
        <div class="svgbtn">
          <LikeIcon />
          <span>0</span>
        </div>
        <div class="svgbtn">
          <CommentIcon/> 评论
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-container {
  gap: 1rem;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
}

.post-main {
  width: 70%;
}

.post-side {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;
  top: 70px;
  width: 30%;
  align-self: flex-start;
}

.post-likes {
  display: flex;
  flex-direction: column;
  width: max-content;
  background-color: var(--main-border);
  border-radius: 10px;
  padding: 1rem;
  gap: 0.5rem;
}

.post {
  background-color: transparent;
  border-radius: 10px;
  padding: 2rem 0.2rem;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 2rem;
  font-size: 0.85rem;
}

.meta-info {
  display: flex;
  flex-direction: row;
}

.comment {
  margin: 2rem;
  margin-top: 2.5rem;
  max-width: 1000px;
}

@media (max-width: 768px) {
  .post-side {
    display: none;
  }
  .post-main {
    width: 100%;
  }
}
</style>
