<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>

<script setup>
import { ref, watch } from 'vue'
import { vantLocales } from '@/i18n'
import { useI18n } from 'vue-i18n'
import { getItem } from '@/utils/storage'
import { useThemeStore } from '@/store/theme.js'

const theme = ref('')
theme.value = getItem('theme') || 'light'
const store = useThemeStore()
watch(
  //监听pinia中的theme值的变化
  () => store.theme,
  (val, oldVal) => {
    theme.value = val
  }
)

const { locale } = useI18n()
vantLocales(locale.value)
</script>

<style scoped></style>
