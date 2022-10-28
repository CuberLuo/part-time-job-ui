<template>
  <van-nav-bar :title="props.title" />
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
