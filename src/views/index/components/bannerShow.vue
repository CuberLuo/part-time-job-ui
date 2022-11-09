<template>
  <div>
    <!-- <van-button type="primary" @click="router.push('/login')">登录</van-button>
    <van-button plain type="primary" @click="router.push('/register')"
      >注册</van-button
    > -->
  </div>
  <div class="home-banner-box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList"
        :key="item.id">
        <img :src="item.img" alt="" width="360" height="200">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerList: []
    }
  },
  methods: {

  },
  created () {
    this.bannerList = [
      { id: 1, img: '/src/static/home/banner/banner1.jpg' },
      { id: 2, img: '/src/static/home/banner/banner2.jpg' }
    ]
  }
}
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
