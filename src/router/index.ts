import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import Post from '@/views/Post.vue'
import PostsView from '@/views/PostsView.vue'
import FriendsView from '@/views/FriendsView.vue'

const routes = [
  { path: '/', name: 'intro', component: PostsView },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: ProjectView},
  { path: '/posts', name: 'posts', component: PostsView},
  { path: '/friends',name:'friends', component: FriendsView},
  {
    path: '/post/:slug',
    name: 'post',
    component: Post, 
    props: true,
  },

]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
