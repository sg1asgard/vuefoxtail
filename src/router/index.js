import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/docs/others',
      // notice how only the child route has a name
      children: [
        {
          path: '',
          name: 'componentAlert',
          component: () => import('@/views/components/AlertView.vue')
        }
      ]
    },
    {
      path: '/docs/components',
      // notice how only the child route has a name
      children: [
        {
          path: '',
          name: 'componentFormButton',
          component: () => import('@/views/components/FormButtonsView.vue')
        }
      ]
    }
  ]
})

export default router
