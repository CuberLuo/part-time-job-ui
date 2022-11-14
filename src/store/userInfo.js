import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
export const userInfoStore = defineStore('userInfo', {
  state: () => ({
    theme: getItem('userInfo')
  }),
  actions: {
    setUserInfo(userInfo) {
      setItem('userInfo', userInfo)
      this.userInfo = userInfo
    }
  }
})
