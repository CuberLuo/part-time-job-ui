<template>
  <van-cell center>
    <template #title>
      <span>{{ $t('cvPage.contactInfo') }}</span>
      <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
    </template>
    <template #right-icon>
      <van-icon name="add-o" @click="openActionSheet" />
    </template>
  </van-cell>
  <van-action-sheet
    v-model:show="show"
    :title="$t('cvPage.contactInfo')"
    :close-on-click-overlay="false"
  >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="phone"
          name="phone"
          label="手机"
          placeholder="请填写您的手机号"
        />
        <van-field
          v-model="email"
          name="email"
          label="邮箱"
          placeholder="请填写您的邮箱地址"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          保存
        </van-button>
      </div>
    </van-form>
  </van-action-sheet>
</template>

<script setup>
import { ref } from 'vue'
const openActionSheet = () => {
  show.value = true
}
const show = ref(false)
</script>

<style scoped></style>
