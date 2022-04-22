import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import productRoutes from './modules/product'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      productRoutes
    ]

  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes
})
router.beforeEach(() => {
  nprogress.start()// 加载进度条
})
router.afterEach(() => {
  nprogress.done()// 加载进度条
})
export default router
