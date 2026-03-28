// src/composables/inertialScrolling.ts
import { onMounted, onBeforeUnmount } from 'vue'

interface SmoothScrollOptions {
  frameRate?: number
  animationTime?: number
  stepSize?: number
  accelerationDelta?: number
  accelerationMax?: number
  keyboardSupport?: boolean
  arrowScroll?: number
}

export function inertialScrolling(userOptions: SmoothScrollOptions = {}) {
  const isMobile = /Mobi|Android|iPhone|iPad|Tablet/i.test(navigator.userAgent)
  if (isMobile) return // 移动端禁用惯性滚动

  const options = {
    frameRate: 144,
    animationTime: 600,
    stepSize: 100,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: true,
    arrowScroll: 50,
    ...userOptions
  }

  let que: any[] = []
  let pending = false
  let lastScroll = Date.now()
  let direction = { x: 0, y: 0 }

  function scrollArray(elem: HTMLElement, left: number, top: number) {
    directionCheck(left, top)
    const now = Date.now()
    const elapsed = now - lastScroll
    if (elapsed < options.accelerationDelta) {
      const factor = Math.min((1 + 50 / elapsed) / 2, options.accelerationMax)
      left *= factor
      top *= factor
    }
    lastScroll = now

    que.push({ x: left, y: top, lastX: 0, lastY: 0, start: Date.now() })
    if (pending) return

    const step = () => {
      const now = Date.now()
      let scrollX = 0, scrollY = 0
      for (let i = 0; i < que.length; i++) {
        const item = que[i]
        const elapsed = now - item.start
        const finished = elapsed >= options.animationTime
        const position = finished ? 1 : pulse(elapsed / options.animationTime)

        const x = (item.x * position - item.lastX) >> 0
        const y = (item.y * position - item.lastY) >> 0
        scrollX += x
        scrollY += y
        item.lastX += x
        item.lastY += y
        if (finished) { que.splice(i, 1); i-- }
      }
      window.scrollBy(scrollX, scrollY)
      if (que.length) {
        requestAnimationFrame(step)
      } else {
        pending = false
      }
    }
    requestAnimationFrame(step)
    pending = true
  }

  function wheel(e: WheelEvent) {
    if (e.defaultPrevented || e.ctrlKey) return
    const deltaX = e.deltaX
    const deltaY = e.deltaY
    scrollArray(document.documentElement, deltaX * options.stepSize / 120, deltaY * options.stepSize / 120)
    e.preventDefault()
  }

  function keydown(e: KeyboardEvent) {
    if (!options.keyboardSupport) return
    let x = 0, y = 0
    switch (e.keyCode) {
      case 38: y = -options.arrowScroll; break
      case 40: y = options.arrowScroll; break
      case 37: x = -options.arrowScroll; break
      case 39: x = options.arrowScroll; break
      case 33: y = -window.innerHeight * 0.9; break
      case 34: y = window.innerHeight * 0.9; break
      case 36: y = -document.documentElement.scrollTop; break
      case 35: y = document.documentElement.scrollHeight; break
      default: return
    }
    scrollArray(document.documentElement, x, y)
    e.preventDefault()
  }

  function directionCheck(x: number, y: number) {
    const newX = x > 0 ? 1 : -1
    const newY = y > 0 ? 1 : -1
    if (direction.x !== newX || direction.y !== newY) {
      direction.x = newX
      direction.y = newY
      que = []
      lastScroll = 0
    }
  }

  // function pulse(x: number): number {
  //   const scale = 6
  //   x *= scale
  //   if (x < 1) return x - (1 - Math.exp(-x))
  //   const start = Math.exp(-1)
  //   x -= 1
  //   return start + (1 - start) * (1 - Math.exp(-x))
  // }

  function pulse(t: number): number {
    return 1 - Math.pow(1 - t, 3) // easeOutCubic
  }

  function init() {
    window.addEventListener('wheel', wheel, { passive: false })
    if (options.keyboardSupport) {
      window.addEventListener('keydown', keydown)
    }
  }

  function destroy() {
    window.removeEventListener('wheel', wheel)
    window.removeEventListener('keydown', keydown)
  }

  init()

  return { destroy }
} 