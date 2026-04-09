import { ref, readonly } from 'vue'

// 将状态放在函数外部，实现全局单例（类似 Store）
const showAvatarInNavbar = ref(false)
const activeHeadingId = ref('')

export function useScrollState() {
  const updateAvatarVisibility = (isVisible: boolean) => {
    showAvatarInNavbar.value = isVisible
  }

  const setActiveHeading = (id: string) => {
    activeHeadingId.value = id
  }

  return {
    // 使用 readonly 防止外部直接修改，维护数据流向
    showAvatarInNavbar: readonly(showAvatarInNavbar),
    activeHeadingId: readonly(activeHeadingId),
    updateAvatarVisibility,
    setActiveHeading
  }
}