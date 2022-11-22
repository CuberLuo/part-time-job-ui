<template>
  <NavBar :title="$t('user.myCv')"></NavBar>
  <CvRate></CvRate>
  <UploadPhoto></UploadPhoto>
  <PersonalInfo></PersonalInfo>
  <van-cell-group inset class="detail-info-cell">
    <EduExp></EduExp>
    <ContactInfo></ContactInfo>
  </van-cell-group>
  <div class="clear-container">
    <van-button
      plain
      hairline
      type="primary"
      class="clear-cv"
      @click="confirmClear"
    >
      {{ $t('cvPage.clear_cv') }}
    </van-button>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import CvRate from './components/CvRate.vue'
import UploadPhoto from './components/UploadPhoto.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import EduExp from './components/EduExp.vue'
import ContactInfo from './components/ContactInfo.vue'
import { showConfirmDialog, showLoadingToast } from 'vant'
import { $t } from '@/i18n'
import { removeItem } from '@/utils/storage.js'
import { useRateStore } from '@/store/cvRate.js'

const store = useRateStore()

const confirmClear = () => {
  showConfirmDialog({
    title: $t('dialog.warn'),
    confirmButtonText: $t('dialog.confirm'),
    cancelButtonText: $t('dialog.cancel'),
    message: $t('dialog.warn_content')
  })
    .then(() => {
      removeItem('full_edu_exp')
      removeItem('full_personal_info')
      removeItem('edu_exp')
      removeItem('full_contact_info')
      removeItem('con_info')
      removeItem('personal_info')
      removeItem('photo')
      store.setRate(0)
      showLoadingToast({
        forbidClick: true
      })
      setTimeout(() => {
        location.reload()
      }, 2000)
    })
    .catch(() => {})
}
</script>

<style scoped>
.detail-info-cell {
  margin-top: 12px;
}
.clear-container {
  padding: 0 17px 0 17px;
}
.clear-cv {
  width: 100%;
  margin-top: 12.8px;
}
</style>
