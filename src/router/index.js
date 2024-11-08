import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import TermView from '@/views/Term.vue'
import AboutView from '@/views/About.vue'
import NotFoundView from '@/views/404.vue'
import ArticlePage from '@/views/ArticlePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView,
    },
    {
      path: '/t&c',
      name: 't&c',

      component: TermView,
    },
    {
      path: '/article',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticlePage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
