<template>
  <van-cell :title="$t('user.themeMode')">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-switch
        v-model="openDarkTheme"
        active-color="#2c2c2c"
        inactive-color="#dcdee0"
        @update:model-value="onUpdateSwitchValue"
      >
        <template #node>
          <div class="icon-wrapper">
            <van-icon
              :class="
                'iconfont ' + (openDarkTheme ? 'icon-moon' : 'icon-sunny')
              "
              :class-prefix="openDarkTheme ? 'moon' : 'sunny'"
            />
            <!-- <van-icon :name="checked ? 'success' : 'cross'" /> -->
          </div>
        </template>
      </van-switch>
    </template>
  </van-cell>
</template>

<script setup>
import { ref } from 'vue'
import { setItem, getItem } from '@/utils/storage'
import { useThemeStore } from '@/store/theme.js'

const store = useThemeStore()

const openDarkTheme = ref()
const theme = getItem('theme') || 'light'
openDarkTheme.value = theme === 'dark' ? true : false
if (theme === 'dark') {
  document.documentElement.style.setProperty(
    '--van-switch-node-background',
    '#cfd3dc'
  )
}
const onUpdateSwitchValue = (newValue) => {
  openDarkTheme.value = newValue
  if (newValue === true) {
    document.documentElement.style.setProperty(
      '--van-switch-node-background',
      '#cfd3dc'
    )
    store.setTheme('dark')
  } else {
    document.documentElement.style.setProperty(
      '--van-switch-node-background',
      'var(--van-white)'
    )
    store.setTheme('light')
  }
}
</script>

<style scoped></style>
