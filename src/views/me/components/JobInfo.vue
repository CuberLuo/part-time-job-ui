<template>
  <van-cell-group inset class="cell-group">
    <van-grid>
      <van-grid-item @click="goToInfo(1)">
        <span class="info-number" >{{signInNum}}</span>
        <span class="info-text">{{ $t('user.all_reg') }}</span>
      </van-grid-item>
      <van-grid-item @click="goToInfo(2)">
        <span class="info-number">{{toBeAcceptedNum}}</span>
        <span class="info-text">{{ $t('user.to_be_acc') }}</span>
      </van-grid-item>
      <van-grid-item @click="goToInfo(3)">
        <span class="info-number">3</span>
        <span class="info-text">{{ $t('user.acc') }}</span>
      </van-grid-item>
      <van-grid-item @click="goToInfo(4)">
        <span class="info-number">3</span>
        <span class="info-text">{{ $t('user.fin') }}</span>
      </van-grid-item>
    </van-grid>
  </van-cell-group>
</template>

<script setup>
import router from '@/router'
import { signInStore } from '@/store/signIn.js'
import { toBeAcceptedStore } from '@/store/toBeAccepted.js'
import { ref, watch } from 'vue'
const goToInfo = (index) => {
  router.push({
    path: '/info_detail',
    query: {
      index
    }
  })
}
const store = signInStore()
const store1 = toBeAcceptedStore()
const signInNum = ref(store.signIn)
const toBeAcceptedNum = ref(store1.toBeAccepted)
watch(
  //监听pinia中的rate值的变化
  () => store.signIn,
  (val, oldVal) => {
    signInNum.value = val
  }
)
watch(
  //监听pinia中的rate值的变化
  () => store1.toBeAccepted,
  (val, oldVal) => {
    toBeAcceptedNum.value = val
  }
)
</script>

<style scoped>
.cell-group {
  margin-top: 12px;
  margin-bottom: 12px;
}
.info-number {
  font-size: 18px;
  font-weight: 750;
  color: #172238;
}
.van-theme-dark .info-number {
  color: white;
}
.info-text {
  text-align: center;
  font-size: 12px;
  color: #50596a;
}
.van-theme-dark .info-text {
  color: white;
}
</style>
