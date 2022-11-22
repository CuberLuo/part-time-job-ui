<template>
  <van-cell-group inset class="photo-cell">
    <van-cell center>
      <template #title>
        <div style="display: flex">
          <div class="title-box">
            <span>{{ $t('cvPage.uploadPhoto') }}</span>
            <template v-if="file.length === 0">
              <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
            </template>
          </div>
          <div class="uploader">
            <van-uploader
              v-model="file"
              @delete="afterDelete"
              :after-read="afterRead"
              :max-count="1"
            />
          </div>
        </div>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import { ref } from 'vue'
import { setItem, getItem, removeItem } from '@/utils/storage'
import { useRateStore } from '@/store/cvRate.js'

const store = useRateStore()

const file = ref([])
if (getItem('photo')) {
  file.value[0] = getItem('photo')
}
const afterRead = (file) => {
  let rate = Number(store.rate)
  setItem('photo', file)
  rate += 20
  store.setRate(rate)
}
const afterDelete = () => {
  let rate = Number(store.rate)
  removeItem('photo')
  rate -= 20
  store.setRate(rate)
}
</script>

<style scoped>
.photo-cell {
  margin-top: 10px;
}
.uploader {
  display: inline-block;
  margin-left: 30px;
}
.title-box {
  display: flex;
  align-items: center;
}
</style>
