<template>
  <div v-for="(item, index) in contact" :key="index">
    <van-swipe-cell>
      <van-cell title="单元格" class="contact-cell">
        <template #title>
          <div>
            <div class="img-container" style="display: inline-block">
              <van-image
                round
                width="45px"
                height="45px"
                :src="item.avatar_src"
              />
            </div>

            <div class="contact-info">
              <div class="contact-title">{{ item.title }}</div>
              <div class="contact-detail">{{ item.detail }}</div>
            </div>
          </div>
        </template>
      </van-cell>
      <template #right>
        <van-button square type="danger" text="删除" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const contact = [
  {
    avatar_src:
      'https://img1.baidu.com/it/u=3178057158,4110048229&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=538',
    title: '客服小助手',
    detail: '官方客服'
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=2360330494,1092108791&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '张三',
    detail: '??'
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=390829681,3002818272&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '李四',
    detail: '!!'
  }
]
</script>

<style scoped>
.contact-cell {
  display: flex;
  border-bottom: 1px solid #dee1e6;
}

.contact-info {
  display: inline-block;
  margin-left: 10px;
}

.contact-title {
  font-size: 14px;
}

.contact-detail {
  font-size: 12px;
  color: #999;
}

.delete-button {
  height: 100%;
}
</style>
