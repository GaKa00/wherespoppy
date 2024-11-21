import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {path: '/concerts', 
      name: 'concerts',
     component: () => import('@/views/SearchView.vue'),
    }
  
  ],
})

export default router
