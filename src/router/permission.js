import router from '@/router'
import { getIsWxClient } from '@/utils/checkWx'
// 前置路由守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/error') {
    if (getIsWxClient()) {
      next()
    } else {
      next('/error')
    }
  } else {
    if (getIsWxClient()) {
      next('/')
    } else {
      next()
    }
  }
})
