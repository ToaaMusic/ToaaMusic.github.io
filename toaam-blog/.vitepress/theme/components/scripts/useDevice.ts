// useDevice.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice(breakpoint = 768) {
  const isMobile = ref(false)
  let mediaQuery: MediaQueryList | null = null

  const update = (e: MediaQueryListEvent | MediaQueryList) => {
    isMobile.value = e.matches
  }

  onMounted(() => {
    const query = `(max-width: ${breakpoint}px)`
    mediaQuery = window.matchMedia(query)
    update(mediaQuery)
    mediaQuery.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return { isMobile }
}