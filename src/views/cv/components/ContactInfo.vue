<template>
  <van-cell center>
    <template #title>
      <span>{{ $t('cvPage.contactInfo') }}</span>
      <template v-if="phone === '' || email === ''">
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
      </template>
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
          :label="$t('cvPage.phone')"
          :placeholder="$t('cvPage.phone_tip')"
        />
        <van-field
          v-model="email"
          name="email"
          :label="$t('cvPage.email')"
          :placeholder="$t('cvPage.email_tip')"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          {{ $t('cvPage.save') }}
        </van-button>
      </div>
    </van-form>
  </van-action-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { setItem, getItem } from '@/utils/storage'
import { showSuccessToast } from 'vant'
import 'vant/es/toast/style'
import { $t } from '@/i18n'

const phone = ref(getItem('con_info').phone || '')
const email = ref(getItem('con_info').email || '')
const openActionSheet = () => {
  show.value = true
}
const show = ref(false)

const onSubmit = (values) => {
  showSuccessToast($t('cvPage.save_feedback'))
  setItem('con_info', values)
  show.value = false
}
</script>

<style scoped></style>
