<template>
  <NavBar :title="title"></NavBar>
  <div class="mycards">
    <van-card
      v-for="card in cards"
      :key="card.id"
      :price="card.price"
      currency=""
      v-show="index == 1 || index == card.status"
    >
      <template #title>
        <div class="title-container">
          <div class="card-title">{{ card.content }}</div>
        </div>
      </template>
      <template #tags>
        <van-tag
          v-for="(label, index) in card.labels"
          :key="index"
          plain
          type="primary"
          >{{ label }}
        </van-tag>
      </template>
    </van-card>
  </div>
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
const cards = [
  {
    id: 1,
    status: '2',
    price: '1～300元/天',
    content: '抖音剪辑/需电脑/可日结',
    labels: ['待录取']
  },
  {
    id: 2,
    status: '3',
    price: '800~1000元/月',
    content: '问卷调查',
    labels: ['已录取']
  },
  {
    id: 3,
    status: '4',
    price: '800~1000元',
    content: '问卷调查',
    labels: ['已结束']
  },
  {
    id: 4,
    status: '2',
    price: '1000~2500元/月',
    content: 'PS兼职结单/日结/不会免费教',
    labels: ['待录取']
  },
  {
    id: 5,
    status: '3',
    price: '800~1000元/月',
    content: '浙江大学（紫荆港校区）问卷',
    labels: ['已录取']
  },
  {
    id: 6,
    status: '4',
    price: '20元/小时',
    content: '浙江工业大学兼职 地推',
    labels: ['已结束']
  },
  {
    id: 7,
    status: '4',
    price: '300元/天',
    content: '招女生打字聊天员 日结',
    labels: ['已结束']
  },
  {
    id: 8,
    status: '2',
    price: '6000～12000元/月',
    content: '带货主播',
    labels: ['待录取']
  },
  {
    id: 9,
    status: '2',
    price: '1～200元/天',
    content: '狼人杀气氛组 边玩游戏边赚钱',
    labels: ['待录取']
  },
  {
    id: 10,
    status: '3',
    price: '150元/天',
    content: '主持人助理',
    labels: ['已录取']
  }
]
</script>

<style>
@import '@/styles/card.css';
</style>
