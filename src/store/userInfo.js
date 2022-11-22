import { defineStore } from 'pinia'
import { getItem, setItem, removeItem } from '@/utils/storage'
export const userInfoStore = defineStore('userInfo', {
  state: () => ({
    userInfo: getItem('userInfo')
    // is_login: ''
  }),
  actions: {
    setUserInfo(userInfo) {
      setItem('userInfo', userInfo)
      this.userInfo = userInfo
    },
    removeUserInfo() {
      removeItem('userInfo')
      this.userInfo = {}
    }
  }
})
