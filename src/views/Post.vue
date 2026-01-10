<template>
  <div class="post-container" v-fade v-if="currentPost" :view-transition-name="`post-${currentPost.md_url}`">
    <div class="post-main">
      <div class="post"> 
        <div class="meta">
          <h1>{{ currentPost.title }}</h1>
          <div class="meta-info">
            <IconCard :icon="CategoryIcon">
              <span>{{ currentPost.class }}</span>
            </IconCard>

            <IconCard v-if="currentPost.tags && currentPost.tags.length">
              <a
                style="margin-left: 0.5rem;"
                v-for="tag in currentPost.tags"
                :key="tag"
                href="javascript:void(0)"
                @click="filterByTag(tag)"
              >
                {{ '#' + tag }}
              </a>
            </IconCard>
          </div>

          <IconCard class="date" :icon="DateIcon">
            <span>{{ postStore.formatDate(currentPost.created_at) }}</span>
          </IconCard>

        </div>
        <div class="md" v-html="currentPost.content"></div>
      </div>

      <div class="post-footer">
        <router-link
          v-if="prevPost"
          :to="{ name: 'post', params: { slug: prevPost.md_url } }"
          class="router-link left"
        >
          ← {{ prevPost.title }}
        </router-link>

        <router-link
          v-if="nextPost"
          :to="{ name: 'post', params: { slug: nextPost.md_url } }"
          class="router-link right"
        >
          {{ nextPost.title }} →
        </router-link>
      </div>

      <div class="comment">
        <h1 class="_before-line">评论(暂时关闭)</h1>

        <!-- <div class="comment-list">
          <div v-if="comments.length === 0" class="no-comment"></div>
          <div class="comment-item" v-for="c in comments" :key="c.id">
            <div class="comment-meta">
              <span class="comment-user">{{ c.user_ip || '匿名' }}</span>
              <span class="comment-time">{{ postStore.formatDate(c.created_at) }}</span>
            </div>
            <div class="comment-content">{{ c.content }}</div>
          </div>
        </div>

        <div class="comment-input">
          <textarea v-model="commentText" placeholder="输入以留下足迹" />
          <div class="send-btn" @click="sendComment">
            <SendIcon />
          </div>
        </div> -->
      </div>

    </div>
    <div class="post-side">
      <Toc :headings="headings"/>
      <div class="post-likes">
        <div
          class="svgbtn"
          :class="{ liked: hasLiked }"
          @click="like"
        >
          <LikeIcon />
          <span>{{ likeCount }}</span>
        </div>
        
        <div class="svgbtn" @click="goToComment">
          <CommentIcon/>{{ currentPost.class }}
        </div>
        
      </div>
    </div>
    
  </div>
  <div v-else class="loading">加载中或文章不存在</div>
</template>

<script setup lang="ts">
import { onMounted, computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import md from '@/utils/md'
import { supabase } from '@/assets/lib/supabase'
import Toc from '@/components/Toc.vue'
import IconCard from '@/components/IconCard.vue'
import CategoryIcon from '@/components/icons/CategoryIcon.vue'
import DateIcon from '@/components/icons/DateIcon.vue'
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const headings = ref<{ id: string; text: string; level: number }[]>([])
const postStore = usePostStore()
const currentPost = ref()
const prevPost = ref()
const nextPost = ref()
import { nextTick } from 'vue'
import LikeIcon from '@/components/icons/LikeIcon.vue'
import CommentIcon from '@/components/icons/CommentIcon.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const filterByTag = (tag: string) => {
  if (route.query.tag === tag) {
    const { tag, ...rest } = route.query
    router.replace({ query: rest })
  } else {
    router.replace({ query: { ...route.query, tag } })
  }
}

const collectHeadings = () => {
  const container = document.querySelector('.md')
  if (!container) return

  const headingEls = container.querySelectorAll('h1, h2, h3')
  const result: { id: string; text: string; level: number }[] = []

  headingEls.forEach((el, index) => {
    const tag = el.tagName.toLowerCase()
    const level = parseInt(tag.replace('h', ''))
    const text = el.textContent?.trim() || ''
    const id = `heading-${index}`
    el.setAttribute('id', id)

    result.push({ id, text, level })
  })

  headings.value = result
}


watch(slug, (newSlug) => {
  if (newSlug) loadPost(newSlug)
})

onMounted(() => {
  loadPost(slug.value)
})

const loadPost = async (slug: string) => {
  await postStore.fetchPosts()
  const post = postStore.getBySlug(slug)
  if (!post) return
  currentPost.value = post
  // 如果没有content就加载
  if (!post.content) {
    const { data, error } = await supabase
      .from('posts')
      .select('content')
      .eq('id', post.id)
      .single()
    if (!error && data) {
      const html = md.render(data.content)
      postStore.setContent(post.id, html)
      currentPost.value.content = html
    }else {
      try {
        const res = await fetch(`https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/posts/${post.md_url}.md`)
        const text = await res.text()
        const html = md.render(text)
        postStore.setContent(post.id, html)
        currentPost.value.content = html
      } catch (e) {
        console.error('加载文章内容失败', e)
      }
    }
  }else{
    currentPost.value.content = md.render(post.content);
  }
  
  const { prev, next } = postStore.getPrevNext(slug)
  prevPost.value = prev
  nextPost.value = next
  window.scrollTo({ top: 0, behavior: 'smooth' })

  await nextTick()
  collectHeadings()
  await loadLikes()
  loadComments()

}

const comments = ref<{ id: number, content: string, created_at: string, user_ip?: string }[]>([])
const commentText = ref('')

const loadComments = async () => {
  if (!currentPost.value) return
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', currentPost.value.id)
    .order('created_at', { ascending: true })

  if (!error && data) {
    comments.value = data
  }
}

const sendComment = async () => {
  const text = commentText.value.trim()
  if (!text || !currentPost.value) return
  const { error } = await supabase.from('comments').insert({
    post_id: currentPost.value.id,
    content: text,
    user_ip: '游客', 
  })

  if (!error) {
    commentText.value = ''
    await loadComments()
  }
}

const likeCount = ref(0)
const hasLiked = ref(false)
let userIP = ''

const loadLikes = async () => {
  if (!currentPost.value) return

  userIP = await postStore.getUserIP()

  // 统计点赞数
  const { count } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', currentPost.value.id)

  if (typeof count === 'number') {
    likeCount.value = count
  }

  // 查询当前 IP 是否已点赞
  const { data } = await supabase
    .from('likes')
    .select('id')
    .eq('post_id', currentPost.value.id)
    .eq('user_ip', userIP)

  hasLiked.value = !!(data && data.length > 0)
}

const like = async () => {
  if (!currentPost.value || hasLiked.value || !userIP) return

  const { error } = await supabase.from('likes').insert({
    post_id: currentPost.value.id,
    user_ip: userIP,
  })

  if (!error) {
    likeCount.value += 1
    hasLiked.value = true
  } else if (error.code === '23505') {
    // 唯一约束冲突
    console.warn('重复点赞')
    hasLiked.value = true
  } else {
    console.error('点赞失败', error)
  }
}


const goToComment = () =>{

}
</script>

<style scoped>
.post-container{
  gap: 1rem;
  display: flex;
  align-self: flex-start; 
  flex-direction: row;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 70px;
}

.post-main {
  width: 70%;
}

.post-side{
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

.post-likes{
  display: flex;
  flex-direction: column;
  width: max-content;
  background-color: var(--main-border);
  border-radius: 10px;
  padding: 1rem;
  gap: 0.5rem;
}

.post{
  background-color: transparent;/*var(--main-border) */
  border-radius: 10px;
  padding: 2rem 0.2rem ;
}
.post-footer{
  gap: 1rem;
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin: 2rem;
  font-size: 0.9rem;
}
.router-link{
  width: 50%;
  font-size: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 24px;
  background-color: var(--main-border);
}
.router-link:hover {
  background-color: var(--main-hover);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.router-link.left {
  margin-right: auto;
}
.router-link.right {
  margin-left: auto;
}
.meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 2rem;
  font-size: 0.85rem;
}
.meta-info{
  display: flex;
  flex-direction: row;
}
.loading {
  padding: 2rem;
  text-align: center;
}

.comment{
  margin: 2rem;
  margin-top: 2.5rem;
  max-width: 1000px;
}
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.comment-item {
  background: var(--main-border);
  border-radius: 10px;
  padding: 1rem;
}

.comment-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: gray;
}

.comment-user {
  font-weight: bold;
}

.comment-content {
  margin-top: 0.5rem;
  white-space: pre-wrap;
  line-height: 1.5;
}

.comment-input {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.comment-input textarea {
  flex: 1;
  min-height: 80px;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid var(--main-border);
  resize: vertical;
  background: var(--bg-color);
  color: var(--text-color);
}

.send-btn {
  cursor: pointer;
  padding: 0.5rem;
  background: var(--main-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .post-side {
    display: none;
  }

  .post-main{
    width: 100%;
  }
}

</style>
