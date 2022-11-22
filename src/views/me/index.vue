<template>
  <div class="user-box">
    <van-image round class="user-img" :src="getImageUrl('not_login.jpg')" />
    <router-link to="/login">
      <div class="user-text" v-show="showText">
        {{ $t('user.login') }}/{{ $t('user.register') }}
      </div>
    </router-link>
    <div class="user-info" v-show="showUserInfo">
        {{userName}}
    </div>
  </div>

  <JobInfo></JobInfo>
  <MyCv></MyCv>
  <MyCollect></MyCollect>
  <LangSelect></LangSelect>
  <ThemeMode></ThemeMode>
  <van-button type="warning" size="large" class="logout" @click="confirmLogout" v-show="showLogout">退出登录</van-button>
</template>

<script setup>
import LangSelect from './components/LangSelect.vue'
import ThemeMode from './components/ThemeMode.vue'
import MyCv from './components/MyCv.vue'
import MyCollect from './components/MyCollect.vue'
import JobInfo from './components/JobInfo.vue'
import { userInfoStore } from '@/store/userInfo.js'
import { setItem, getItem } from '@/utils/storage'
import { ref } from 'vue'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'
import { $t } from '@/i18n'

const store = userInfoStore()
const userInfo = ref()
const userName = ref()
const passWord = ref()
const showLogout = ref()
if (getItem('userInfo')) {
  userInfo.value = getItem('userInfo')
  userName.value = userInfo.value.userName
  passWord.value = userInfo.value.passWord
}
const showText = ref(true)
const showUserInfo = ref(false)
if (userName.value) {
  showText.value = false
  showUserInfo.value = true
  showLogout.value = true
}
const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href
}
const logout = () => {
  localStorage.removeItem('userInfo')
  showLogout.value = false
  showText.value = true
  showUserInfo.value = false
}
const confirmLogout = () => {
  showConfirmDialog({
  title: $t('dialog.warn'),
  message:
    $t('dialog.confirm_logout')
  })
  .then(() => {
    logout()
  })
  .catch(() => {
  })
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
.user-info {
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
.logout {
  position: absolute;
  bottom: 4rem
}
</style>
