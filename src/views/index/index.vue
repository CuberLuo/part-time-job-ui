<template>
  <div>
    <div>
      <!-- <van-button type="primary" @click="router.push('/login')">登录</van-button>
    <van-button plain type="primary" @click="router.push('/register')"
      >注册</van-button
    > -->
      index
    </div>
    <div id="main"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import router from '@/router'
import * as echarts from 'echarts/core'
import {
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { BarChart, LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

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
</script>

<style scoped>
#main {
  height: 300px;
  margin: 0 auto;
}
</style>
