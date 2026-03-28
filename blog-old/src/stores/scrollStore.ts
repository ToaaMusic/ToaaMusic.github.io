import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
  state: () => ({
    showAvatarInNavbar: false,
    activeHeadingId: '',
  }),
  actions: {
    updateAvatarVisibility(isVisible: boolean) {
      this.showAvatarInNavbar = isVisible
    },
    setActiveHeading(id: string) {
      this.activeHeadingId = id
    }
  }
})