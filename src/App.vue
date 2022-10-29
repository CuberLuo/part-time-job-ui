<template>
  <NavBar :title="route.meta.title || ''"></NavBar>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item name="index" to="/index" icon="home-o">{{
      $t('tabbar.index')
    }}</van-tabbar-item>
    <van-tabbar-item name="job_square" to="/job_square" icon="search" dot>{{
      $t('tabbar.job_square')
    }}</van-tabbar-item>
    <van-tabbar-item name="message" to="/message" icon="chat-o" badge="5">{{
      $t('tabbar.message')
    }}</van-tabbar-item>
    <van-tabbar-item name="me" to="/me" icon="user-o">{{
      $t('tabbar.me')
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { vantLocales } from '@/i18n'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
vantLocales(locale.value)

const route = useRoute()
const active = ref('')

router.afterEach((to, from) => {
  const activeBar = to.path.replace('/', '')
  active.value = activeBar
})
</script>

<style scoped></style>
