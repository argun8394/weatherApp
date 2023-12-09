// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { store } from "../store";

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',

        component: () => import(/* webpackChunkName: "home" */ '@/components/HomePage.vue'),
      },
      {
        path: '/signup',
        name: 'Signup',

        component: () => import(/* webpackChunkName: "home" */ '@/views/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'Login',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
      {
        path: '/weather',
        name: 'Weather',

        component: () => import(/* webpackChunkName: "home" */ '@/views/Weather.vue'),
        meta: { requiresAuth: true },
      }
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/views/ErrorNotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else if (to.meta.requiresAuth && !store.state.user.isAuthenticated) {
    next("/login");
  } else {
    next();
  }

});

export default router



