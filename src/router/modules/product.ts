import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw =
  {
    path: 'product',
    name: '',

    component: RouterView,
    meta: { // 自定义路由元数据
      title: '商品管理'

    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/product/list/index.vue'),
        meta: { // 自定义路由元数据
          title: '商品列表'

        }
      },
      {
        path: 'category',
        component: () => import('@/views/product/category/index.vue'),
        meta: { // 自定义路由元数据
          title: '商品分类'

        }
      },
      {
        path: 'attr',
        component: () => import('@/views/product/attr/index.vue'),
        meta: { // 自定义路由元数据
          title: '商品规格'

        }
      },
      {
        path: 'replay',
        component: () => import('@/views/product/replay/index.vue'),
        meta: { // 自定义路由元数据
          title: '商品评论'

        }
      }
    ]
  }

export default routes
