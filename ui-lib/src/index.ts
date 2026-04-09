// src/index.ts
import type { App } from 'vue'

import fade from './directives/fade'

import List from './components/List.vue'
import Card from './components/Card.vue'
import IconCard from './components/IconCard.vue'
import IconLink from './components/IconLink.vue'
import Link from './components/Link.vue'
import Loading from './components/Loading.vue'
import Avatar from './components/Avatar.vue'
import KvCard from './components/KvCard.vue'

import NavBar from './components/unique/NavBar.vue'
import FooterBar from './components/unique/FooterBar.vue'
import ThemeSwitcher from './components/unique/ThemeSwitcher.vue'
import Bge from './components/unique/Bge.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import Toast from './components/Toast.vue'
import Toc from './components/Toc.vue'

import MoreIcon from './icons/MoreIcon.vue'
import DateIcon from './icons/DateIcon.vue'
import LikeIcon from './icons/LikeIcon.vue'
import CommentIcon from './icons/CommentIcon.vue'
import CategoryIcon from './icons/CategoryIcon.vue'
import FolderIcon from './icons/FolderIcon.vue'
import NotesIcon from './icons/NotesIcon.vue'

import { NavbarConfigClass } from './types/navbar'

export type { CardData } from './components/Card.vue'
export type { NavbarConfig, NavItem } from './types/navbar'

// 按需导出
export { List, Card, IconCard, IconLink, Link, Loading, Avatar, KvCard, 
  NavBar, FooterBar, ThemeSwitcher, Bge, MusicPlayer, Toast, Toc,
  MoreIcon, DateIcon, LikeIcon, CommentIcon, CategoryIcon,
  FolderIcon, NotesIcon, NavbarConfigClass,
 }

// 作为插件使用：app.use(EbrainUI)
export default {
  install(app: App) {
    app.directive('fade', fade)
  },
}
