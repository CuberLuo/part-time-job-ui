import { defineStore } from 'pinia'
import { getItem, setItem, removeItem } from '@/utils/storage'
export const toBeAcceptedStore = defineStore('toBeAccepted', {
  state: () => ({
    toBeAccepted: 4
  }),
  actions: {
    setToBeAccepted(toBeAccepted) {
      setItem('toBeAccepted', toBeAccepted)
      this.toBeAccepted = toBeAccepted
    },
    removeUserInfo() {
      removeItem('toBeAccepted')
      this.toBeAccepted = {}
    },
    addToBeAccepted() {
      this.toBeAccepted = this.toBeAccepted + 1
    }
  }
})
