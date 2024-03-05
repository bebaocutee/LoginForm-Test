import { createRouter, createWebHistory } from 'vue-router'
import RegisterLoginView from '../views/RegisterLoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dang-nhap',
      name: 'login',
      component: RegisterLoginView
    }
  ]
})

export default router
