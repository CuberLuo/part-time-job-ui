<template>
  <NavBar :title="$t('user.myCv')"></NavBar>
  <van-cell-group inset class="rate-cell">
    <van-circle
      v-model:current-rate="currentRate"
      :rate="rate"
      :color="gradientColor"
      :stroke-width="130"
      :text="$t('cvPage.cvRate') + `: ${currentRate}`"
    >
    </van-circle>
    <div class="cv-tips">
      <span>
        {{ $t('cvPage.cvTips1') }}<br />
        {{ $t('cvPage.cvTips2') }}
      </span>
    </div>
  </van-cell-group>

  <van-cell-group inset class="personal-info-cell">
    <van-cell>
      <template #title>
        <span>{{ $t('cvPage.personalInfo') }}</span>
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
      </template>
      <template #right-icon>
        <van-icon name="add-o" />
      </template>
    </van-cell>
  </van-cell-group>

  <van-cell-group inset class="detail-info-cell">
    <van-cell>
      <template #title>
        <span>{{ $t('cvPage.eduExp') }}</span>
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
      </template>
      <template #right-icon>
        <van-icon name="add-o" />
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <span>{{ $t('cvPage.skillCert') }}</span>
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
      </template>
      <template #right-icon>
        <van-icon name="add-o" />
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <span>{{ $t('cvPage.contactInfo') }}</span>
        <van-tag plain type="danger">{{ $t('cvPage.missing') }}</van-tag>
      </template>
      <template #right-icon>
        <van-icon name="add-o" />
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
const rate = ref(80) //rate 属性表示进度条的目标进度
const currentRate = ref(50) //currentRate表示动画过程中的实时进度
const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6'
}
</script>

<style scoped>
.cv-tips {
  margin-left: 10px;
  display: inline-block;
  vertical-align: 50px;
  font-size: 18px;
}
.rate-cell {
  margin-top: 20px;
}
.personal-info-cell,
.detail-info-cell {
  margin-top: 12px;
}
</style>
