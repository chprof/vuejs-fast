import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('./pages/Todos.vue')
    }
  ]
})
