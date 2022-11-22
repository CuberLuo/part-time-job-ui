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
          <div class="img-container" style="display: inline-block">
            <van-image round class="contact-img" :src="item.avatar_src" />
          </div>

          <div class="contact-info">
            <div class="contact-title">
              {{ item.title }}
              <div class="tag-block" v-if="item.title === '客服小助手'">
                <van-tag type="success">{{ $t('message.official') }}</van-tag>
              </div>
            </div>
            <div class="contact-detail">{{ item.detail }}</div>
          </div>
        </template>
        <template #value>
          <div class="contact-time">{{ item.latest_time }}</div>
          <div v-if="item.msg_num !== 0">
            <van-badge :content="item.msg_num" style="margin-right: 12px">
              <div></div>
            </van-badge>
          </div>
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
import { $t } from '@/i18n'
const contact = ref([
  {
    avatar_src:
      'https://img0.baidu.com/it/u=1080644147,2604676989&fm=253&fmt=auto&app=138&f=JPEG?w=341&h=341',
    title: '客服小助手',
    detail: '官方客服',
    latest_time: '',
    msg_num: 1
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=2360330494,1092108791&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '张三',
    detail: '??',
    latest_time: '8:29',
    msg_num: 4
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=390829681,3002818272&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '李四',
    detail: '[图片]',
    latest_time: '2022-11-10',
    msg_num: 0
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=3094149767,177600321&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '王五',
    detail: '你的简历很不错',
    latest_time: '2022-11-09',
    msg_num: 0
  },
  {
    avatar_src:
      'https://img2.baidu.com/it/u=864800148,863255913&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    title: '赵六',
    detail: '明天见!',
    latest_time: '2022-10-01',
    msg_num: 0
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
.tag-block {
  display: inline-block;
}
</style>
<style>
.van-cell__title,
.van-cell__value {
  flex: auto;
}
</style>
