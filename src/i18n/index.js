import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'
// 引入vant英文语言包
import enUS from 'vant/es/locale/lang/en-US'
// // 引入vant中文语言包
import zhCN from 'vant/lib/locale/lang/zh-CN'
// 引入本地自定义语言包
import enLocale from '@/i18n/languages/en_us'
import zhLocale from '@/i18n/languages/zh_cn'
import { setItem, getItem } from '@/utils/storage'

const messages = {
  en: {
    ...enUS,
    ...enLocale
  },
  zh: {
    ...zhCN,
    ...zhLocale
  }
}

export const getCurrentLanguage = () => {
  //由用户浏览器所用的语言决定默认语言
  const UAlang = navigator.language // zh-CN
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  setItem('language', langCode)
  return langCode
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getItem('language') || getCurrentLanguage(), //默认语言
  messages
})

export const vantLocales = (lang) => {
  if (lang === 'en') {
    Locale.use(lang, enUS)
  } else if (lang === 'zh') {
    Locale.use(lang, zhCN)
  }
}

export function $t(args) {
  return i18n.global.t(args)
}
