import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/view/Home/index.vue'),
    name: 'Home',
    children: [
      {
        path: 'lay',
        component: () => import('@/view/Home/index.vue'),
        name: 'lay'
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/view/PageError/index.vue'),
    name: '404',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/demo',
    component: () => import('@/view/Demo/index.vue'),
    name: 'demo',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/spriteDemo',
    component: () => import('@/view/spriteDemo/index.vue'),
    name: 'spriteDemo',
    meta: {
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
})

router.beforeEach((to, from, next) => {
  console.log('has404+++', router.hasRoute('404'), router.getRoutes())
  console.log(to.name, from)
  document.title = to.name as string
  next()
  // ...
  // 返回 false 以取消导航
  // return false
})

export default router
