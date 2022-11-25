<template>
  <div class="top">
    <h1>&ensp;{{ $t('tabbar.job_square') }}</h1>
  </div>
  <van-search
    v-model="value"
    shape="round"
    placeholder="请输入搜索关键词"
    :label="curCity"
    @click="router.push({ path: '/job_search', query: { curCity } })"
  />

  <div id="container"></div>

  <van-tabs v-model:active="active">
    <van-tab v-for="(label, key) in category" :key="key" :title="label">
      <div class="mycards">
        <van-card
          v-for="card in cards"
          :key="card.id"
          :price="card.price"
          currency=""
          v-show="card.category == key"
        >
          <template #title>
            <div class="title-container">
              <div class="card-title">{{ card.content }}</div>
              <template v-if="isLogin">
                <template v-if="card.isCollect == 0">
                  <div class="star-icon">
                    <van-icon
                      name="star-o"
                      color="#ffffff"
                      @click="collect(card.id)"
                    />
                  </div>
                </template>
                <template v-else>
                  <div class="star-icon">
                    <van-icon
                      name="star"
                      color="#ffeb67"
                      @click="collect(card.id)"
                    />
                  </div>
                </template>
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
    </van-tab>
  </van-tabs>
</template>

<script setup>
import { ref, watch } from 'vue'
import router from '@/router'
import { signInStore } from '@/store/signIn.js'
import { showConfirmDialog, showSuccessToast, showFailToast } from 'vant'
import { $t } from '@/i18n'
import { userInfoStore } from '@/store/userInfo.js'
import { getItem } from '@/utils/storage'
import AMapLoader from '@amap/amap-jsapi-loader'
const userStore = userInfoStore()
watch(
  () => userStore.userInfo,
  (val, oldVal) => {
    if (JSON.stringify(val) === '{}') {
      isLogin.value = false
    }
  }
)

const curCity = ref('未知')
AMapLoader.load({
  key: '61054ff7a821fab2b707a95511b77f82',
  version: '2.0',
  plugins: ['AMap.CitySearch']
})
  .then((AMap) => {
    const map = new AMap.Map('container', {
      viewMode: '2D',
      center: [120.038201, 30.226134],
      zoom: 13
    })
    function showCityInfo() {
      //实例化城市查询类
      const citysearch = new AMap.CitySearch()
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.city && result.bounds) {
            const cityinfo = result.city
            curCity.value = cityinfo
            const citybounds = result.bounds
            //地图显示当前城市
            map.setBounds(citybounds)
          }
        }
      })
    }
    showCityInfo()
  })
  .catch((e) => {
    console.log(e)
  })

const value = ref()
const active = ref()
const store = signInStore()
const isLogin = ref(getItem('userInfo') ? true : false)
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
const category = [
  '推荐',
  '在家做',
  '在本地',
  '主播',
  '在线课程',
  '文案编辑',
  '配送员'
]
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
  },
  {
    id: 8,
    category: 3,
    price: '6000～12000元/月',
    content: '带货主播',
    labels: ['额外补贴', '飙升'],
    isCollect: 0
  },
  {
    id: 9,
    category: 3,
    price: '1～200元/天',
    content: '狼人杀气氛组 边玩游戏边赚钱',
    labels: ['额外补贴', '周结'],
    isCollect: 0
  },
  {
    id: 10,
    category: 3,
    price: '150元/天',
    content: '主持人助理',
    labels: ['额外补贴', '日结'],
    isCollect: 0
  },
  {
    id: 11,
    category: 3,
    price: '3000元/周',
    content: '线下陪玩',
    labels: ['飙升', '周结'],
    isCollect: 0
  },
  {
    id: 12,
    category: 3,
    price: '1000-5000元/次',
    content: '婚礼主持人',
    labels: ['额外补贴', '其他'],
    isCollect: 0
  },
  {
    id: 13,
    category: 4,
    price: '120～400元/天',
    content: '兼职主持人',
    labels: ['额外补贴', '飘升'],
    isCollect: 0
  },
  {
    id: 14,
    category: 4,
    price: '1000～3000元/月',
    content: '航老师考验招浙外实习生',
    labels: ['额外补贴', '月结'],
    isCollect: 0
  },
  {
    id: 15,
    category: 4,
    price: '1500～2000元/月',
    content: '视频剪辑',
    labels: ['热门渠道', '飘升'],
    isCollect: 0
  },
  {
    id: 16,
    category: 4,
    price: '400元/天',
    content: 'python/opencv后端图片处理',
    labels: ['热门推荐', '日结'],
    isCollect: 0
  },
  {
    id: 17,
    category: 5,
    price: '1～300元/天',
    content: '招APP打字聊天元',
    labels: ['额外补贴', '日结'],
    isCollect: 0
  },
  {
    id: 18,
    category: 5,
    price: '5000～7000元/月',
    content: '文案运营和策划',
    labels: ['热门推荐', '月结'],
    isCollect: 0
  },
  {
    id: 19,
    category: 5,
    price: '6000～10000元/月',
    content: '高校科研助理',
    labels: ['官方渠道', '月结'],
    isCollect: 0
  },
  {
    id: 20,
    category: 5,
    price: '100元/次',
    content: '华东旅游媒体招实习记者',
    labels: ['官方渠道'],
    isCollect: 0
  },
  {
    id: 21,
    category: 6,
    price: '300～400元/天',
    content: '急招杭州日结配送',
    labels: ['官方渠道', '简单易做'],
    isCollect: 0
  },
  {
    id: 22,
    category: 6,
    price: '300～400元/天',
    content: '达美乐披萨兼职外卖配送员',
    labels: ['额外补贴', '简单易做'],
    isCollect: 0
  },
  {
    id: 23,
    category: 6,
    price: '15000元/月',
    content: '直聘福利送餐员',
    labels: ['简单易做', '月结'],
    isCollect: 0
  },
  {
    id: 24,
    category: 0,
    price: '240元/天',
    content: '招优秀英语翻译文书撰稿人',
    labels: ['热门渠道', '日结'],
    isCollect: 0
  },
  {
    id: 25,
    category: 0,
    price: '120～180元/天',
    content: '商场扫单',
    labels: ['热门渠道', '日结'],
    isCollect: 0
  },
  {
    id: 26,
    category: 1,
    price: '300元/天',
    content: '俄语视频翻译（线上兼职）',
    labels: ['额外补贴', '日结'],
    isCollect: 1
  },
  {
    id: 27,
    category: 1,
    price: '2000～5000元/月',
    content: '实验室采购平台兼职',
    labels: ['额外补贴', '月结'],
    isCollect: 0
  },
  {
    id: 28,
    category: 1,
    price: '240元/天',
    content: '招优秀英语翻译文书撰稿人',
    labels: ['额外补贴', '日结'],
    isCollect: 1
  },
  {
    id: 29,
    category: 2,
    price: '20元/时',
    content: '兼职初级教练（射箭）',
    labels: ['额外补贴', '其他'],
    isCollect: 0
  }
])
const collect = (id) => {
  cards.value[id - 1].isCollect = 1 - cards.value[id - 1].isCollect
}
</script>

<style scoped>
h1 {
  color: rgb(119, 146, 244);
}
#container {
  width: 100%;
  height: 200px;
}
</style>
<style>
@import '@/styles/card.css';
.amap-copyright,
.amap-logo {
  display: none !important;
}
</style>
