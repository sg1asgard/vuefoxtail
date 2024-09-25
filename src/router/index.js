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
          name: 'alert',
          component: () => import('@/views/components/AlertView.vue')
        }
      ]
    },
    {
      // Getting Started
      path: '/getting-started',
      children: [
        {
          path: 'introduction',
          name: 'introduction',
          component: () => import('@/views/getting-started/IntroductionView.vue')
        },
        {
          path: 'quick-start',
          name: 'quick_start',
          component: () => import('@/views/getting-started/QuickStartView.vue')
        }
      ]
    },
    {
      // Components
      path: '/docs/components',
      // notice how only the child route has a name
      children: [
        {
          path: 'forms/button',
          name: 'form_button',
          component: () => import('@/views/components/FormButtonView.vue')
        },
        {
          path: 'forms/checkbox',
          name: 'form_checkbox',
          component: () => import('@/views/components/FormCheckBoxView.vue')
        },
        {
          path: 'forms/radio',
          name: 'form_radio',
          component: () => import('@/views/components/FormRadioView.vue')
        },
        {
          path: 'forms/select',
          name: 'form_select',
          component: () => import('@/views/components/FormSelectView.vue')
        }
      ]
    }
  ]
})

export default router
