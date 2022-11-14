<template>
  <van-cell center>
    <template #title>
      <span>{{ $t('cvPage.eduExp') }}</span>
      <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
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
          name="picker"
          label="学历"
          placeholder="点击选择学历"
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
          label="学校"
          placeholder="请填写您的毕业学校"
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
const result = ref('')
const showPicker = ref(false)
const columns = [
  { text: '博士', value: '1' },
  { text: '硕士', value: '2' },
  { text: '本科', value: '3' },
  { text: '专科', value: '4' },
  { text: '高中/职高/技校', value: '5' },
  { text: '其他', value: '6' }
]

const onConfirm = ({ selectedOptions }) => {
  result.value = selectedOptions[0].text
  showPicker.value = false
}
</script>

<style scoped></style>
