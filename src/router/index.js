import { createRouter, createWebHistory } from 'vue-router'
import { scrollToTop } from '@/utils/utils'

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
      path: '/docs/forms',
      // notice how only the child route has a name
      children: [
        {
          path: 'button',
          name: 'form_button',
          component: () => import('@/views/components/FormButtonView.vue')
        },
        {
          path: 'checkbox',
          name: 'form_checkbox',
          component: () => import('@/views/components/FormCheckBoxView.vue')
        },
        {
          path: 'radio',
          name: 'form_radio',
          component: () => import('@/views/components/FormRadioView.vue')
        },
        {
          path: 'select',
          name: 'form_select',
          component: () => import('@/views/components/FormSelectView.vue')
        },
        {
          path: 'input',
          name: 'form_input',
          component: () => import('@/views/components/FormInputView.vue')
        },
        {
          path: 'range',
          name: 'form_range',
          component: () => import('@/views/components/FormRangeView.vue')
        },
        {
          path: 'textarea',
          name: 'form_textarea',
          component: () => import('@/views/components/FormTextareaView.vue')
        }
      ]
    },
    {
      // Components
      path: '/docs/components',
      // notice how only the child route has a name
      children: [
        {
          path: 'tables',
          name: 'tables',
          component: () => import('@/views/components/BasicTableView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((_to, _from, next) => {
  // _ is marking unused params
  // Smooth scroll to top transition
  scrollToTop()

  next()
})

export default router
