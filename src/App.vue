<template>
  <NavBar :title="route.meta.title || ''"></NavBar>
  <router-view />
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="index" to="/index" icon="home-o"
      >首页</van-tabbar-item
    >
    <van-tabbar-item name="job_square" to="/job_square" icon="search" dot
      >兼职广场</van-tabbar-item
    >
    <van-tabbar-item name="message" to="/message" icon="chat-o" badge="5"
      >消息</van-tabbar-item
    >
    <van-tabbar-item name="me" to="/me" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const active = ref(route.path.replace('/', ''))
const onChange = (index) => {
  console.log(index)
}
</script>

<style scoped></style>
