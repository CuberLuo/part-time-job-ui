<template>
  <div class="top">
    <h1>&ensp;{{$t('tabbar.job_square')}}</h1>
  </div>
  <van-tabs v-model:active="active">
    <van-tab
      v-for="(label, key) in category"
      :key="key"
      :title="label"
    >
      <div class="mycards">
        <van-card
          v-for="card in cards"
          :key="card.id"
          :price="card.price"
          currency=""
          :title="card.content"
          v-show="card.category == key"
        >
          <template #tags>
            <van-tag
              v-for="(label, index) in card.labels"
              :key="index"
              plain
              type="primary"
              >{{ label }}
            </van-tag>
          </template>
          <template #footer>
            <van-button size="mini">立即报名</van-button>
          </template>
        </van-card>
    </div>
    </van-tab>
  </van-tabs>
</template>

<script setup>
import JobCard from './components/JobCard.vue'
import { ref } from 'vue'
const category = [
  '推荐',
  '在家做',
  '在本地',
  '主播',
  '在线课程',
  '文案编辑',
  '配送员'
]
const cards = [
  {
    id: 1,
    category: 0,
    price: '1～300元/天',
    content: '抖音剪辑/需电脑/可日结',
    labels: ['热门推荐', '官方渠道', '额外补贴']
  },
  {
    id: 2,
    category: 0,
    price: '800~1000元/月',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴']
  },
  {
    id: 3,
    category: 1,
    price: '800~1000元',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴']
  },
  {
    id: 4,
    category: 2,
    price: '1000~2500元/月',
    content: 'PS兼职结单/日结/不会免费教',
    labels: ['热门推荐', '官方渠道']
  },
  {
    id: 5,
    category: 2,
    price: '800~1000元/月',
    content: '浙江大学（紫荆港校区）问卷',
    labels: ['官方渠道']
  },
  {
    id: 6,
    category: 2,
    price: '20元/小时',
    content: '浙江工业大学兼职 地推',
    labels: ['额外补贴']
  },
  {
    id: 7,
    category: 3,
    price: '300元/天',
    content: '招女生打字聊天员 日结',
    labels: ['额外补贴']
  },
  {
    id: 8,
    category: 3,
    price: '6000～12000元/月',
    content: '带货主播',
    labels: ['额外补贴', '飙升']
  },
  {
    id: 9,
    category: 3,
    price: '1～200元/天',
    content: '狼人杀气氛组 边玩游戏边赚钱',
    labels: ['额外补贴', '周结']
  },
  {
    id: 10,
    category: 3,
    price: '1～200元/天',
    content: '狼人杀气氛组 边玩游戏边赚钱',
    labels: ['额外补贴', '周结']
  },
  {
    id: 11,
    category: 3,
    price: '1～200元/天',
    content: '狼人杀气氛组 边玩游戏边赚钱',
    labels: ['额外补贴', '周结']
  },
  {
    id: 12,
    category: 3,
    price: '1～200元/天',
    content: '狼人杀气氛组 边玩游戏边赚钱',
    labels: ['额外补贴', '周结']
  }
]

</script>

<style scoped>
h1 {
  color: rgb(119, 146, 244);
}
</style>
