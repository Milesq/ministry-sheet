import useUser from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    }
  ],
})

router.beforeEach((to) => {
  const { user } = useUser()

  if (to.meta.requiresAuth && !user) {
    return {
      name: 'login',
    }
  }
})

export default router
