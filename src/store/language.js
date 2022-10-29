import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
export const useLanguageStore = defineStore('lang', {
  state: () => ({
    language: getItem('language') || 'zh'
  }),
  actions: {
    setLanguage(lang) {
      setItem('language', lang)
      this.language = lang
    }
  }
})
