import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: { title: 'index' },
    component: () => import('@/views/index/index.vue')
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
