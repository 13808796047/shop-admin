import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw =
  {
    path: 'product',
    name: '',
    component: RouterView,
    children: [
      {
        path: 'list',
        name: '商品管理',
        component: () => import('@/views/product/list/index.vue')
      },
      {
        path: 'category',
        name: '商品分类',
        component: () => import('@/views/product/category/index.vue')
      },
      {
        path: 'attr',
        name: '商品规格',
        component: () => import('@/views/product/attr/index.vue')
      },
      {
        path: 'replay',
        name: '商品评论',
        component: () => import('@/views/product/replay/index.vue')
      }
    ]
  }

export default routes
