<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="index" to="/index" icon="home-o">{{
      $t('tabbar.index')
    }}</van-tabbar-item>
    <van-tabbar-item name="job_square" to="/job_square" icon="search" dot>{{
      $t('tabbar.job_square')
    }}</van-tabbar-item>
    <van-tabbar-item
      name="message"
      to="/message"
      icon="chat-o"
      :badge="isLogin ? 5 : 1"
      >{{ $t('tabbar.message') }}</van-tabbar-item
    >
    <van-tabbar-item name="me" to="/me" icon="user-o">{{
      $t('tabbar.me')
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { userInfoStore } from '@/store/userInfo.js'
import { getItem } from '@/utils/storage'

const route = useRoute()
const { path } = route // 当前路由的路径path
const store = userInfoStore()
const isLogin = ref(false)
if (getItem('userInfo')) {
  isLogin.value = true
}
watch(
  () => store.userInfo,
  (val, oldVal) => {
    if (JSON.stringify(val) === '{}') {
      isLogin.value = false
    }
  }
)
// console.log(store.userInfo)

const active = ref(path.replace('/', ''))
</script>

<style scoped></style>
