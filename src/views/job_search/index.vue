<template>
  <NavBar :title="$t('search.job_search')"></NavBar>
  <van-search
    v-model="value"
    shape="round"
    placeholder="请输入搜索关键词"
    label="西湖区"
  />
</template>

<script setup></script>

<style scoped></style>
