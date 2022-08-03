import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/view/Home/index.vue'),
    name: 'Home'
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.name, from)
  document.title = to.name as string
  next()
  // ...
  // 返回 false 以取消导航
  // return false
})

export default router
