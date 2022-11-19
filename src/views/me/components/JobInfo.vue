<template>
  <van-cell-group inset class="cell-group">
    <van-grid>
      <van-grid-item>
        <span class="info-number">0</span>
        <span class="info-text">{{ $t('user.all_reg') }}</span>
      </van-grid-item>
      <van-grid-item>
        <span class="info-number">0</span>
        <span class="info-text">{{ $t('user.to_be_acc') }}</span>
      </van-grid-item>
      <van-grid-item>
        <span class="info-number">0</span>
        <span class="info-text">{{ $t('user.acc') }}</span>
      </van-grid-item>
      <van-grid-item>
        <span class="info-number">0</span>
        <span class="info-text">{{ $t('user.fin') }}</span>
      </van-grid-item>
    </van-grid>
  </van-cell-group>
</template>

<script setup></script>

<style scoped>
.cell-group {
  margin-top: 12px;
  margin-bottom: 12px;
}
.info-number {
  font-size: 18px;
  font-weight: 750;
  color: #172238;
}
.van-theme-dark .info-number {
  color: white;
}
.info-text {
  text-align: center;
  font-size: 12px;
  color: #50596a;
}
.van-theme-dark .info-text {
  color: white;
}
</style>
