import useUser from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    adminOnly?: boolean
  }
}

export enum Routes {
  Home = 'home',
  Admin = 'admin',
  Login = 'login',
  AdminLogin = 'adminLogin',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.Home,
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin',
      name: Routes.Admin,
      component: () => import('../views/AdminView.vue'),
      meta: { adminOnly: true },
    },
    {
      path: '/login',
      name: Routes.Login,
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/login/admin',
      name: Routes.AdminLogin,
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

router.beforeEach(to => {
  const { user, isAdmin } = useUser()

  if (to.meta.requiresAuth && !user) {
    return {
      name: 'login',
    }
  }

  if (to.meta.adminOnly && !isAdmin) {
    return {
      name: 'adminLogin',
    }
  }
})

export default router
