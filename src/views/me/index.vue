<template>
  <div class="user-box">
    <van-image round class="user-img" :src="getImageUrl('not_login.jpg')" />
    <router-link to="/register">
      <div class="user-text">
        {{ $t('user.login') }}/{{ $t('user.register') }}
      </div>
    </router-link>
  </div>

  <JobInfo></JobInfo>
  <MyCv></MyCv>
  <MyCollect></MyCollect>
  <LangSelect></LangSelect>
  <ThemeMode></ThemeMode>
</template>

<script setup>
import LangSelect from './components/LangSelect.vue'
import ThemeMode from './components/ThemeMode.vue'
import MyCv from './components/MyCv.vue'
import MyCollect from './components/MyCollect.vue'
import JobInfo from './components/JobInfo.vue'

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href
}
</script>

<style scoped>
.user-box {
  height: 100px;
  /* margin-bottom: 20px; */
  background: url(../../assets/images/Mountain.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.user-img {
  width: 60px;
  height: 60px;
  margin: 20px 0 0 20px;
  vertical-align: middle;
}
.user-text {
  display: inline-block;
  margin-left: 15px;
  margin-top: 28px;
  font-size: 26px;
  font-weight: 700;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: black;
}
.user-tips-img {
  width: 100%;
  margin-top: 30px;
}
</style>
