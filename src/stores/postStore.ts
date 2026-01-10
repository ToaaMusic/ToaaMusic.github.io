// 📦 stores/usePostStore.ts
import { defineStore } from 'pinia'
import { supabase } from '@/assets/lib/supabase'

export interface Post {
  id: number
  title: string
  summary: string
  md_url: string
  created_at: string
  tags?: string[]
  class?: string
  image_url?: string
  content?: string
  top?: boolean
  collection?: string
  [key: string]: any
}

const MY_UID = '0acac23b-b02b-43f8-9087-f01f16365e98'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
    loaded: false,
    subscribed: false
  }),

  actions: {
    async fetchPosts(force = false) {
      if (this.loaded && !force) return
      const { data, error } = await supabase
        .from('posts')
        .select('id, created_at, title, top, collection, tags, md_url, summary, image_url, class')//id, created_at, title, top, collection, tags, md_url, summary, image_url, class
        .eq('user_id', MY_UID)
        .order('created_at', { ascending: false })
      if (error) throw error
      this.posts = data || []
      this.loaded = true
    },

    initRealtime() {
      if (this.subscribed) return
      this.subscribed = true

      supabase.channel('public:posts')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'posts',
          filter: `user_id=eq.${MY_UID}`
        }, async () => {
          await this.fetchPosts(true)
        })
        .subscribe()
    },

    getBySlug(slug: string) {
      return this.posts.find((p) => p.md_url === slug) || null
    },

    getById(id: number) {
      return this.posts.find((p) => p.id === id) || null
    },

    getPrevNext(slug: string) {
      const index = this.posts.findIndex((p) => p.md_url === slug)
      return {
        prev: this.posts[index + 1] || null,
        next: this.posts[index - 1] || null
      }
    },

    setContent(id: number, content: string) {
      const post = this.getById(id)
      if (post) post.content = content
    },

    formatDate(iso: string){
      return new Date(iso).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    async getUserIP(){
      const res = await fetch('https://api.ipify.org?format=json')
      const data = await res.json()
      return data.ip
    },
    // 获取用户 IP 和位置信息（无需自己写 IP 提取）
    async getUserLocation() {
      const res = await fetch("https://enhiucyodopknrbdtswy.supabase.co/functions/v1/ip-info");
      const data = await res.json();

      return data
    }



    // async loadPost(slug: string) {
    //   await this.fetchPosts()
    //   const post = this.getBySlug(slug)
    //   if (!post) return
    //   this.currentPost = post

    //   if (!post.content) {
    //     const { data, error } = await supabase
    //       .from('posts')
    //       .select('content')
    //       .eq('id', post.id)
    //       .single()
    //     if (!error && data) {
    //       const html = new MarkdownIt({ html: true, linkify: true, breaks: true }).render(data.content)
    //       this.setContent(post.id, html)
    //       this.currentPost.content = html
    //     }else {
    //       try {
    //         const res = await fetch(`https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/posts/${post.md_url}.md`)
    //         const text = await res.text()
    //         const html = md.render(text)
    //         this.setContent(post.id, html)  
    //         currentPost.value.content = html
    //       } catch (e) {
    //         console.error('加载文章内容失败', e)
    //       }
    //     }
    //   }
    // },

    // async fetchLikes(postId: number) {
    //   const { count } = await supabase
    //     .from('likes')
    //     .select('*', { count: 'exact', head: true })
    //     .eq('post_id', postId)
    //   this.likeCount = count || 0
    //   this.hasLiked = !!localStorage.getItem(`liked-${postId}`)
    // },

    // async like(postId: number) {
    //   if (this.hasLiked) return
    //   const { error } = await supabase.from('likes').insert({ post_id: postId })
    //   if (!error) {
    //     this.likeCount += 1
    //     this.hasLiked = true
    //     localStorage.setItem(`liked-${postId}`, 'true')
    //   }
    // },

    // async fetchComments(postId: number) {
    //   const { data } = await supabase
    //     .from('comments')
    //     .select('*')
    //     .eq('post_id', postId)
    //     .order('created_at')
    //   this.comments = data || []
    // },

    // async submitComment(postId: number, content: string) {
    //   const text = content.trim()
    //   if (!text) return
    //   const { error } = await supabase.from('comments').insert({
    //     post_id: postId,
    //     content: text,
    //     user_name: '游客'
    //   })
    //   if (!error) await this.fetchComments(postId)
    // }
  }
})
