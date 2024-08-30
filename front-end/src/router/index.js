import { createRouter, createWebHistory } from 'vue-router'
import Dasboard from '../views/DasboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dasboard
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue') // Login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue') // Login
    }
  ]
})

export default router
