<template>
  <NavBar :title="title"></NavBar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { $t } from '@/i18n'
const route = useRoute()
const index = route.query.index
const title = ref('')
switch (Number(index)) {
  case 1:
    title.value = $t('user.all_reg')
    break
  case 2:
    title.value = $t('user.to_be_acc')
    break
  case 3:
    title.value = $t('user.acc')
    break
  case 4:
    title.value = $t('user.fin')
    break
}
</script>

<style scoped></style>
