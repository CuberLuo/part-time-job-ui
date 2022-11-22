<template>
  <van-cell-group inset class="personal-info-cell">
    <van-cell center>
      <template #title>
        <span>{{ $t('cvPage.personalInfo') }}</span>
        <template v-if="realName === '' || checked === '' || result === ''">
          <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
        </template>
      </template>
      <template #right-icon>
        <van-icon name="add-o" @click="openActionSheet" />
      </template>
    </van-cell>
  </van-cell-group>
  <van-action-sheet
    v-model:show="show"
    :title="$t('cvPage.personalInfo')"
    :close-on-click-overlay="false"
  >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="realName"
          name="realName"
          :label="$t('cvPage.name')"
          :placeholder="$t('cvPage.name')"
        />
        <van-field name="gender" :label="$t('cvPage.gender')">
          <template #input>
            <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="male">{{ $t('cvPage.male') }}</van-radio>
              <van-radio name="female">{{ $t('cvPage.female') }}</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="result"
          is-link
          readonly
          name="birthday"
          :label="$t('cvPage.birthday')"
          :placeholder="$t('cvPage.birthday_tip')"
          @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-date-picker
            v-model="currentDate"
            :min-date="new Date(1937, 1, 1)"
            :max-date="new Date(2010, 1, 1)"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
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

const currentDate = ref(['2001', '01', '01'])
const openActionSheet = () => {
  show.value = true
}
const show = ref(false)
const realName = ref(getItem('personal_info').realName || '')
const onSubmit = (values) => {
  showSuccessToast($t('cvPage.save_feedback'))
  setItem('personal_info', values)
  show.value = false
}
const result = ref(getItem('personal_info').birthday || '')
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
  result.value = selectedValues.join('/')
  showPicker.value = false
}
const checked = ref(getItem('personal_info').gender || '')
</script>

<style scoped>
.personal-info-cell {
  margin-top: 12px;
}
</style>