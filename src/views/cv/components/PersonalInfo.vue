<template>
  <van-cell-group inset class="personal-info-cell">
    <van-cell center>
      <template #title>
        <span>{{ $t('cvPage.personalInfo') }}</span>
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
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
          label="姓名"
          placeholder="姓名"
        />
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="male">男</van-radio>
              <van-radio name="female">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="result"
          is-link
          readonly
          name="datePicker"
          label="生日"
          placeholder="点击选择生日"
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
          保存
        </van-button>
      </div>
    </van-form>
  </van-action-sheet>
</template>

<script setup>
import { ref } from 'vue'
const currentDate = ref(['2001', '01', '01'])
const openActionSheet = () => {
  show.value = true
}
const show = ref(false)
const realName = ref('')
const onSubmit = (values) => {
  console.log('submit', values)
}
const result = ref('')
const showPicker = ref(false)
const onConfirm = ({ selectedValues }) => {
  result.value = selectedValues.join('/')
  showPicker.value = false
}
const checked = ref('')
</script>

<style scoped>
.personal-info-cell {
  margin-top: 12px;
}
</style>
