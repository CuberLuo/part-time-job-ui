<template>
  <h1>&ensp;{{ $t('tabbar.index') }}</h1>
  <bannerShow></bannerShow>
  <div id="main"></div>
  <div class="mycards">
    <van-card
      v-for="card in cards"
      :key="card.id"
      :price="card.price"
      currency=""
    >
      <template #title>
        <div class="title-container">
          <div class="card-title">{{ card.content }}</div>
          <template v-if="isLogin">
            <div
              class="star-icon"
              v-show="card.isCollect == 0"
              @click="collect(card.id)"
            >
              <van-icon name="star-o" color="#ffffff" />
            </div>
            <div
              class="star-icon"
              v-show="card.isCollect == 1"
              @click="collect(card.id)"
            >
              <van-icon name="star" color="#ffeb67" />
            </div>
          </template>
        </div>
      </template>
      <template #tags>
        <van-tag
          class="tag"
          v-for="(label, index) in card.labels"
          :key="index"
          plain
          type="primary"
          >{{ label }}
        </van-tag>
      </template>
      <template #footer>
        <div>
          <van-button size="mini" class="button">详细信息</van-button>
          <van-button size="mini" @click="signIn" class="button"
            >立即报名</van-button
          >
        </div>
      </template>
    </van-card>
  </div>
</template>

<script setup>
import bannerShow from './components/bannerShow.vue'
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts/core'
import { signInStore } from '@/store/signIn.js'
import {
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { $t } from '@/i18n'
import { showConfirmDialog, showSuccessToast, showFailToast } from 'vant'
import { setItem, getItem } from '@/utils/storage'

const isLogin = ref(getItem('userInfo') ? true : false)
const store = signInStore()
function collect(id) {
  cards.value[id - 1].isCollect = 1 - cards.value[id - 1].isCollect
}
function signIn() {
  if (!isLogin.value) {
    showFailToast($t('user.login_tip'))
  } else {
    showConfirmDialog({
      title: $t('dialog.confirm'),
      message: $t('dialog.confirm_signIn'),
      confirmButtonText: $t('dialog.confirm_button'),
      cancelButtonText: $t('dialog.cancel_button')
    })
      .then(() => {
        store.addSignIn()
        console.log(store.signIn)
        showSuccessToast($t('toast.success_signin'))
      })
      .catch(() => {})
  }
}
onMounted(() => {
  echarts.use([
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    LineChart,
    CanvasRenderer,
    UniversalTransition
  ])
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('main'))
  // 监听图表容器的大小并改变图表大小
  window.onresize = function () {
    myChart.resize()
  }
  // 绘制图表

  myChart.setOption({
    legend: {
      data: ['月累计新增', '总兼职岗位数']
    },
    tooltip: {},
    xAxis: [
      {
        type: 'category',
        data: ['2022-09', '2022-10', '2022-11', '2022-12'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '总兼职岗位数',
        min: 0,
        max: 250,
        interval: 50
      },
      {
        type: 'value',
        name: '月累计新增',
        min: 0,
        max: 100,
        interval: 10
      }
    ],
    series: [
      {
        name: '月累计新增',
        type: 'bar',
        yAxisIndex: 1,
        data: [30, 40, 50, 40]
      },
      {
        name: '总兼职岗位数',
        type: 'line',
        data: [30, 70, 120, 160]
      }
    ]
  })
})
const cards = ref([
  {
    id: 1,
    category: 0,
    price: '1～300元/天',
    content: '抖音剪辑/需电脑/可日结',
    labels: ['热门推荐', '官方渠道', '额外补贴'],
    isCollect: 1
  },
  {
    id: 2,
    category: 0,
    price: '800~1000元/月',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴'],
    isCollect: 0
  },
  {
    id: 3,
    category: 1,
    price: '800~1000元',
    content: '问卷调查',
    labels: ['热门推荐', '官方渠道', '额外补贴'],
    isCollect: 1
  },
  {
    id: 4,
    category: 2,
    price: '1000~2500元/月',
    content: 'PS兼职结单/日结/不会免费教',
    labels: ['热门推荐', '官方渠道'],
    isCollect: 0
  },
  {
    id: 5,
    category: 2,
    price: '800~1000元/月',
    content: '浙江大学（紫荆港校区）问卷',
    labels: ['官方渠道'],
    isCollect: 0
  },
  {
    id: 6,
    category: 2,
    price: '20元/小时',
    content: '浙江工业大学兼职 地推',
    labels: ['额外补贴'],
    isCollect: 0
  },
  {
    id: 7,
    category: 3,
    price: '300元/天',
    content: '招女生打字聊天员 日结',
    labels: ['额外补贴'],
    isCollect: 0
  }
])
</script>

<style scoped>
#main {
  height: 300px;
  margin: 0 auto;
}
h1 {
  color: rgb(119, 146, 244);
}
</style>
<style>
@import '@/styles/card.css';
</style>
