import { createRouter, createWebHashHistory } from 'vue-router'
import { $t } from '@/i18n'
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    meta: { title: $t('tabbar.index') },
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/error',
    meta: { title: 'error' },
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '/job_square',
    meta: { title: $t('tabbar.job_square') },
    component: () => import('@/views/job_square/index.vue')
  },
  {
    path: '/message',
    meta: { title: $t('tabbar.message') },
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/me',
    meta: { title: $t('tabbar.me') },
    component: () => import('@/views/me/index.vue')
  },
  {
    path: '/register',
    meta: { title: $t('user.register') },
    component: () => import('@/views/register/index.vue')
  },
  {
    path: '/login',
    meta: { title: $t('user.login') },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/cv',
    meta: { title: $t('user.myCv') },
    component: () => import('@/views/cv/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 后置路由守卫
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // console.log(to.path)
})
export default router
