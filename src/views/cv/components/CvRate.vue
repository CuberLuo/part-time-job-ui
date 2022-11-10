<template>
  <van-cell-group inset class="rate-cell">
    <van-circle
      class="rate-circle"
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
</template>

<script setup>
import { ref } from 'vue'
const rate = ref(80) //rate 属性表示进度条的目标进度
const currentRate = ref(50) //currentRate表示动画过程中的实时进度
const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6'
}
</script>

<style scoped>
.cv-tips {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-left: 10px;
  display: inline-block;
  vertical-align: middle; */
  font-size: 18px;
}
.van-theme-dark .cv-tips {
  color: white;
}
.rate-cell {
  margin-top: 20px;
  display: flex;
}
.rate-circle {
  margin: 10px;
}
</style>
