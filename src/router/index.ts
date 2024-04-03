import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: 'imgList',
        name: 'imgList',
        component: () => import('../views/imgList.vue')
      },
      {
        path: 'videoList',
        name: 'videoList',
        component: () => import('../views/videoList.vue')
      },
    ]
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
