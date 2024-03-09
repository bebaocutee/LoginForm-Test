import { createRouter, createWebHistory } from 'vue-router'
import RegisterLoginView from '../views/RegisterLoginView.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/dang-nhap',
      name: 'login',
      component: RegisterLoginView
    }
  ]
})

export default router
