// src/directives/fade.ts
import type { DirectiveBinding } from 'vue'

interface FadeOptions {
  delay?: number
  offset?: string
  duration?: number
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<FadeOptions | number>) {
    const opts: FadeOptions = typeof binding.value === 'number'
      ? { delay: binding.value }
      : (binding.value || {})

    const delay    = opts.delay    ?? 0
    const offset   = opts.offset   ?? '10px'
    const duration = opts.duration ?? 400

    // 1) 先设初始状态（opacity=0 + 向下偏移），并加上过渡
    el.style.opacity    = '0'
    el.style.transform  = `translateY(${offset})`
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`

    // 2) 触发进入动画
    setTimeout(() => {
      el.style.opacity   = '1'
      el.style.transform = 'translateY(0)'
    }, delay)

    // 3) 动画做完后把 style.transform 和 transition 都清空
    setTimeout(() => {
      el.style.transform  = ''
      el.style.transition = ''
    }, delay + duration)
  }
}
