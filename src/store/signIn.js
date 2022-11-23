import { defineStore } from 'pinia'
import { getItem, setItem, removeItem } from '@/utils/storage'
export const signInStore = defineStore('signIn', {
  state: () => ({
    signIn: 10
    // is_login: ''
  }),
  actions: {
    setSignIn(signIn) {
      setItem('signIn', signIn)
      this.signIn = signIn
    },
    removeUserInfo() {
      removeItem('signIn')
      this.signIn = {}
    },
    addSignIn() {
      this.signIn = this.signIn + 1
    }
  }
})
