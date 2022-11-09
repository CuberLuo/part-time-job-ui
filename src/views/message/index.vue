<template>
  <div v-for="(item, index) in contact" :key="index">
    <van-swipe-cell
      :name="index"
      :before-close="beforeClose"
      ref="swipeCell"
      class="swipeCell"
    >
      <van-cell center class="contact-cell">
        <template #title>
          <div>
            <div class="img-container" style="display: inline-block">
              <van-image round class="contact-img" :src="item.avatar_src" />
            </div>

            <div class="contact-info">
              <div class="contact-title">{{ item.title }}</div>
              <div class="contact-detail">{{ item.detail }}</div>
            </div>
          </div>
        </template>
        <template #value>
          <div class="contact-time">{{ item.latest_time }}</div>
        </template>
      </van-cell>

      <template #right>
        <van-button
          @click="stickCell(index)"
          square
          type="primary"
          text="置顶"
          class="stick-button"
        />
        <van-button
          @click="deleteCell(index)"
          square
          type="danger"
          text="删除"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { showConfirmDialog } from 'vant'
import 'vant/es/dialog/style'
import { $t } from '@/i18n'
const contact = ref([
  {
    avatar_src:
      'https://img1.baidu.com/it/u=3178057158,4110048229&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=538',
    title: '客服小助手',
    detail: '官方客服',
    latest_time: ''
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=2360330494,1092108791&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '张三',
    detail: '??',
    latest_time: '8:29'
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=390829681,3002818272&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '李四',
    detail: '!!',
    latest_time: '2022-11-10'
  }
])

const swipeCell = ref()

const stickCell = (index) => {
  contact.value.forEach((item, i) => {
    if (i === index) {
      contact.value.unshift(contact.value.splice(index, 1)[0])
    }
  })
  swipeCell.value[index].close()
}
const deleteCell = (index) => {
  showConfirmDialog({
    title: $t('dialog.confirmDelete'),
    confirmButtonText: $t('dialog.confirm'),
    cancelButtonText: $t('dialog.cancel')
  }).then(() => {
    swipeCell.value[index].close()
    contact.value.splice(index, 1)
  })
}

const beforeClose = ({ position }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true
  }
}
</script>

<style scoped>
.contact-cell {
  display: flex;
  border-bottom: 1px solid #dee1e6;
}

.contact-img {
  width: 45px;
  height: 45px;
}

.contact-info {
  display: inline-block;
  margin-left: 10px;
}

.contact-title {
  font-size: 14px;
}

.contact-detail,
.contact-time {
  font-size: 12px;
  color: #999;
}

.delete-button,
.stick-button {
  height: 100%;
}
</style>
