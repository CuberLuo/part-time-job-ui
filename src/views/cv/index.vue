<template>
  <NavBar :title="$t('user.myCv')"></NavBar>
  <CvRate></CvRate>
  <UploadPhoto></UploadPhoto>
  <PersonalInfo></PersonalInfo>
  <van-cell-group inset class="detail-info-cell">
    <EduExp></EduExp>
    <ContactInfo></ContactInfo>
  </van-cell-group>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import CvRate from './components/CvRate.vue'
import UploadPhoto from './components/UploadPhoto.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import EduExp from './components/EduExp.vue'
import ContactInfo from './components/ContactInfo.vue'
</script>

<style scoped>
.detail-info-cell {
  margin-top: 12px;
}
</style>
