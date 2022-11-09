<template>
  <div class="err">
    <van-empty image="error" />
    <div>请在微信中打开本站点</div>
  </div>
</template>

<script setup></script>

<style scoped>
.err {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red;
}
.van-empty {
  padding: 0;
}
</style>
