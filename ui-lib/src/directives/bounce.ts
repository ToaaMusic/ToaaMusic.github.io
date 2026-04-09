// src/directives/bounce.ts
import type { DirectiveBinding } from 'vue'

interface BounceOptions {
  delay?: number         // 延迟开始（ms）
  duration?: number      // 动画总时长（ms）
  stiffness?: number     // 弹性强度（影响 scale/位移）默认 1.0
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<BounceOptions | number>) {
    const opts: BounceOptions = typeof binding.value === 'number'
      ? { delay: binding.value }
      : (binding.value || {})

    const delay = opts.delay ?? 0
    const duration = opts.duration ?? 500
    const stiffness = opts.stiffness ?? 1.0

    // 初始状态
    el.style.opacity = '0'
    el.style.transform = `translateY(${40 * stiffness}px) scale(${0.8 + 0.1 * stiffness})`
    el.style.transition = `opacity ${duration}ms ease, transform ${duration * 0.6}ms cubic-bezier(0.68, -0.6, 0.32, 1.6)`

    setTimeout(() => {
      // 第一次弹起
      el.style.opacity = '1'
      el.style.transform = `translateY(${-8 * stiffness}px) scale(${1.05 + 0.02 * stiffness})`

      // 回落
      setTimeout(() => {
        el.style.transform = 'translateY(0) scale(1)'
      }, duration * 0.6)
    }, delay)
  }
}
