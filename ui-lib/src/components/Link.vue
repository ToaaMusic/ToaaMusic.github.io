<template>
  <a
    :href="href"
    :target="target"
    :rel="rel"
    :class="className"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  href?: string
  to?: string | { path: string }
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  type?: 'internal' | 'external'
  className?: string
}>(), {
  target: '_self',
  rel: 'noopener noreferrer',
  type: 'internal'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  navigate: [path: string]
}>()

// 判断是否为内部链接
const isInternal = computed(() => {
  if (props.type === 'external') return false
  if (props.type === 'internal') return true
  
  // 自动判断：以http://或https://开头的是外部链接
  const href = props.href || (typeof props.to === 'string' ? props.to : props.to?.path || '')
  return !href.startsWith('http://') && !href.startsWith('https://')
})

// 获取实际跳转目标
const href = computed(() => {
  if (props.href) return props.href
  if (props.to) {
    return typeof props.to === 'string' ? props.to : props.to.path
  }
  return '#'
})

const handleClick = (event: MouseEvent) => {
  emit('click', event)
  
  // 如果是内部链接，发射navigate事件
  if (isInternal.value && props.target === '_self') {
    event.preventDefault()
    emit('navigate', href.value)
  }
  
  // 如果是外部链接且不是新窗口打开，阻止默认行为，使用window.location
  if (!isInternal.value && props.target !== '_blank') {
    event.preventDefault()
    window.location.href = href.value
  }
}
</script>