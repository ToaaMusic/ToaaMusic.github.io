import type { App, Component } from 'vue'

export type { CardData } from './components/Card.vue'

// 暴露出来的每个组件，类型先写成 Component，够用就行
export const List: Component
export const Card: Component
export const IconCard: Component
export const IconLink: Component
export const Link: Component
export const Loading: Component
export const Avatar: Component
export const KvCard: Component

export const NavBar: Component
export const FooterBar: Component
export const ThemeSwitcher: Component
export const Bge: Component
export const Toast: Component
export const MusicPlayer: Component
export const Toc: Component

export const MoreIcon: Component
export const DateIcon: Component
export const CategoryIcon: Component
export const CommentIcon: Component
export const LikeIcon: Component
export const FolderIcon: Component
export const NotesIcon: Component

// 默认导出插件
declare const _default: {
  install(app: App): void
}

export default _default
