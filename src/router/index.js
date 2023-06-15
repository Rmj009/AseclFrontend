import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CRUD',
      name: 'CRUD',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CrudView.vue')
    },
    {
      path: '/TablesView',
      name: 'TablesView',
      // route level code-splitting
      // this generates a separate chunk (Blog.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TableView.vue')
    },
    {
      path: '/Prompt',
      name: 'Prompt',
      // route level code-splitting
      // this generates a separate chunk (Blog.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PromptView.vue')
    }

  ]
})

export default router
