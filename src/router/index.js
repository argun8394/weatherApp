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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/signup',
        name: 'Signup',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
      {
        path: '/weather',
        name: 'Weather',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Weather.vue'),
        // meta: { requiresAuth: true },
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
    // No authentication required for the login route
    next();
  } else if (to.meta.requiresAuth && !store.state.user.isAuthenticated) {
    // Redirect to login if authentication is required but the user is not authenticated
    next("/login");
  } else {
    // Allow navigation for other cases
    next();
  }

});

export default router



