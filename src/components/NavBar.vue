<template>
  <van-nav-bar
    left-arrow
    :title="props.title"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="wap-home-o" size="18" />
    </template>
  </van-nav-bar>
</template>

<script setup>
import router from '@/router'
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
const onClickLeft = () => history.back()
const onClickRight = () => {
  router.push('/index')
}
</script>

<style scoped></style>
