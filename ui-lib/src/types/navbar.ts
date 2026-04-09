import { type Component, markRaw } from 'vue'

export interface NavbarConfig {
  logo?: {
    text?: string
    href?: string
    image?: string
    alt?: string
    position?: 'left' | 'center' | 'right'
  }
  items?: NavItem[]
  avatar?: {
    src?: string
    alt?: string
    visible?: boolean
    onClick?: () => void
  }
  search?: {
    placeholder?: string
    enabled?: boolean
  }
  stickyThreshold?: number
  hideThreshold?: number
  transparentAtTop?: boolean
}

export class NavbarConfigClass implements NavbarConfig {
  logo?: NavbarConfig['logo']
  items: NavItem[] = []
  avatar?: NavbarConfig['avatar']
  search?: NavbarConfig['search']
  stickyThreshold: number = 50
  hideThreshold: number = 300
  transparentAtTop: boolean = true

  constructor(config?: Partial<NavbarConfig>) {
    if (config?.logo) this.logo = config.logo
    if (config?.items) {
      // 处理items中的icon组件，使用markRaw避免响应式转换
      this.items = config.items.map(item => ({
        ...item,
        icon: item.icon ? markRaw(item.icon) : undefined
      }))
    }
    if (config?.avatar) this.avatar = config.avatar
    if (config?.search) this.search = config.search
    if (config?.stickyThreshold !== undefined) this.stickyThreshold = config.stickyThreshold
    if (config?.hideThreshold !== undefined) this.hideThreshold = config.hideThreshold
    if (config?.transparentAtTop !== undefined) this.transparentAtTop = config.transparentAtTop
  }
}

export interface NavItem {
  name: string
  path: string
  type: 'internal' | 'external'
  icon?: Component
  target?: '_blank' | '_self'
}
