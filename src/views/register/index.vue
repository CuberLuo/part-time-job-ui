<template>
  <NavBar :title="$t('user.register')"></NavBar>
  <h1>&ensp;{{ $t('user.register') }}</h1>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        :label="$t('formText.username')"
        :placeholder="$t('formText.username')"
        :rules="[{ required: true, message: $t('formText.usernameEmpty') }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        :label="$t('formText.password')"
        :placeholder="$t('formText.password')"
        :rules="[{ required: true, message: $t('formText.passwordEmpty') }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        class="button"
      >
        {{ $t('formText.submit') }}
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
const username = ref('')
const password = ref('')
const onSubmit = () => {}
</script>

<style scoped>
.button {
  background-color: rgb(119, 146, 244);
}
h1 {
  color: rgb(119, 146, 244);
}
</style>
