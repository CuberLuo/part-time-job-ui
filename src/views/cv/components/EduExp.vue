<template>
  <van-cell center>
    <template #title>
      <span>{{ $t('cvPage.eduExp') }}</span>
      <template v-if="school === '' || result === ''">
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
      </template>
    </template>
    <template #right-icon>
      <van-icon name="add-o" @click="openActionSheet" />
    </template>
  </van-cell>
  <van-action-sheet
    v-model:show="show"
    :title="$t('cvPage.eduExp')"
    :close-on-click-overlay="false"
  >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="result"
          is-link
          readonly
          name="edu_bg"
          :label="$t('cvPage.edu_bg')"
          :placeholder="$t('cvPage.edu_bg_tip')"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>

        <van-field
          v-model="school"
          name="school"
          :label="$t('cvPage.school')"
          :placeholder="$t('cvPage.school_tip')"
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
import { useRateStore } from '@/store/cvRate.js'

const store = useRateStore()

const openActionSheet = () => {
  show.value = true
}
const show = ref(false)
const school = ref(getItem('edu_exp').school || '')
const result = ref(getItem('edu_exp').edu_bg || '')
const showPicker = ref(false)
const columns = [
  { text: $t('cvPage.doctor'), value: '1' },
  { text: $t('cvPage.master'), value: '2' },
  { text: $t('cvPage.bachelor'), value: '3' },
  { text: $t('cvPage.jun_college'), value: '4' },
  { text: $t('cvPage.hi_school'), value: '5' },
  { text: $t('cvPage.other'), value: '6' }
]

const onConfirm = ({ selectedOptions }) => {
  result.value = selectedOptions[0].text
  showPicker.value = false
}
const checkFull = () => {
  if (school.value !== '' && result.value !== '') {
    return true
  } else {
    return false
  }
}
const onSubmit = (values) => {
  let rate = Number(store.rate)
  const full = getItem('full_edu_exp') || 'no'
  if (checkFull() === true) {
    setItem('full_edu_exp', 'yes')
  } else {
    setItem('full_edu_exp', 'no')
  }
  showSuccessToast($t('cvPage.save_feedback'))
  setItem('edu_exp', values)
  show.value = false
  if (full === 'no' && checkFull() === true) {
    rate += 20
    store.setRate(rate)
  } else if (full === 'yes' && checkFull() === false) {
    rate -= 20
    store.setRate(rate)
  }
}
</script>

<style scoped></style>
