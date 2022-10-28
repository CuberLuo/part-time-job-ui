import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    meta: { title: '首页' },
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/job_square',
    meta: { title: '兼职广场' },
    component: () => import('@/views/job_square/index.vue')
  },
  {
    path: '/message',
    meta: { title: '消息' },
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/me',
    meta: { title: '我的' },
    component: () => import('@/views/me/index.vue')
  },
  {
    path: '/register',
    meta: { title: '注册' },
    component: () => import('@/views/register/index.vue')
  },
  {
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/views/login/index.vue')
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
})
export default router
