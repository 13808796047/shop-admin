import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import productRoutes from './modules/product'
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/index.vue')
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
export default router
