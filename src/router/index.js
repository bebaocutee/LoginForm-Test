import { createRouter, createWebHistory } from 'vue-router'
import RegisterLoginView from '../views/RegisterLoginView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dang-nhap',
      name: 'login',
      component: RegisterLoginView
    },
    {
      path: '/trang-chu',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
