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
const file = ref([])
if (getItem('photo')) {
  file.value[0] = getItem('photo')
}
const afterRead = (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file)
  setItem('photo', file)
}
const afterDelete = () => {
  removeItem('photo')
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
