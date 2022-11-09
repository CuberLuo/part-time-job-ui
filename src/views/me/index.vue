<template>
  <div class="user-box">
    <van-image round class="user-img" :src="getImageUrl('not_login.jpg')" />
    <div class="user-text">
      {{ $t('user.login') }}/{{ $t('user.register') }}
    </div>
  </div>
  <myCv></myCv>
  <langSelect></langSelect>
  <themeMode></themeMode>
</template>

<script setup>
import langSelect from './components/langSelect.vue'
import themeMode from './components/themeMode.vue'
import myCv from './components/myCv.vue'
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
</style>
