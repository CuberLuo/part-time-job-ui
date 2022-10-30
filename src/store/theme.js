import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: getItem('theme') || 'light'
  }),
  actions: {
    setTheme(theme) {
      setItem('theme', theme)
      this.theme = theme
    }
  }
})
