// useDevice.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`
  const mediaQuery = window.matchMedia(query)
  const isMobile = ref(mediaQuery.matches)

  const update = (e: MediaQueryListEvent) => {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mediaQuery.addEventListener('change', update)
  })
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', update)
  })

  return { isMobile }
}
