<template>
  <div class="home-banner-box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="item.img" alt="" width="360" height="200" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const getImageUrl = (name) => {
  return new URL(`../../../assets/images/${name}`, import.meta.url).href
}
const bannerList = ref([
  { id: 1, img: getImageUrl('banner/banner1.jpg') },
  { id: 2, img: getImageUrl('banner/banner2.jpg') }
])
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: rgb(119, 146, 244);
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  background-color: #ffffff;
}
</style>
