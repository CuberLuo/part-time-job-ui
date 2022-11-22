import router from '@/router'
import { getIsWxClient } from '@/utils/checkWx'
import { getItem } from '@/utils/storage'
import { showFailToast } from 'vant'
import { $t } from '@/i18n'
// 前置路由守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/error') {
    if (getIsWxClient()) {
      if (!getItem('userInfo')) {
        //未登录
        if (to.path === '/cv' || to.path === '/collect') {
          showFailToast($t('user.login_tip'))
          next('/me')
        } else {
          next()
        }
      } else {
        next()
      }
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
