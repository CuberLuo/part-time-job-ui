<template>
  <div>me</div>
  <van-cell
    is-link
    :title="$t('user.language') + `(${currentLang})`"
    @click="show = true"
  />
  <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/store/language.js'
import { showSuccessToast } from 'vant'
import 'vant/es/toast/style'
import { vantLocales } from '@/i18n'

const show = ref(false)
const actions = [
  { name: '简体中文', className: 'zh' },
  { name: 'English', className: 'en' }
]
const i18n = useI18n()
const currentLang = ref(i18n.locale.value === 'zh' ? '简体中文' : 'English')
console.log(i18n.locale.value)
const store = useLanguageStore()

const onSelect = (item) => {
  const lang = item.className
  currentLang.value = lang === 'zh' ? '简体中文' : 'English'
  // 更新i18n的locale
  i18n.locale.value = lang
  // 更新Pinia中的store
  store.setLanguage(lang)
  // 更新vant的Locale
  vantLocales(lang)
  location.reload()
  //隐藏Action Sheet
  show.value = false
}
</script>

<style scoped></style>
