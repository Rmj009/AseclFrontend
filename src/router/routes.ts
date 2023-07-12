import { RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/team',
    component: () => import('@/views/Team.vue'),
  },
  // {
  //   path: '/CRUD',
  //   component: () => import('@/views/CrudView.vue'),
  // },
  {
    path: '/TablesView',
    component: () => import('@/views/TablesView.vue'),
  },
  {
    path: '/Prompt',
    component: () => import('@/views/PromptView.vue'),
  },
]

export default routes
