import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
export const useRateStore = defineStore('cvRate', {
  state: () => ({
    rate: getItem('cvRate') || 0
  }),
  actions: {
    setRate(cvRate) {
      setItem('cvRate', cvRate)
      this.rate = cvRate
    }
  }
})
