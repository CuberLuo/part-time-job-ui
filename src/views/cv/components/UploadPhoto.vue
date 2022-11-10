<template>
  <van-cell-group inset class="photo-cell">
    <van-cell center>
      <template #title>
        <div style="display: flex">
          <div class="title-box">
            <span>{{ $t('cvPage.uploadPhoto') }}</span>
          </div>
          <div class="uploader">
            <van-uploader v-model="value" :max-count="1" />
          </div>
        </div>
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import { ref } from 'vue'
const value = ref([])
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
