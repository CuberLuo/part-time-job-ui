<template>
  <div class="mycards">
    <van-card
      v-for="card in cards"
      :key="card.id"
      :price="card.price"
      currency=""
      :title="card.content"
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
</template>

<script setup>

const cards = [
  {
    id: 1,
    price: '800~1000元',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴']
  },
  {
    id: 2,
    price: '800~1000元',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴']
  },
  {
    id: 2,
    price: '800~1000元',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴']
  }
]
</script>
<style>

</style>
