import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NoticiaADetalle from '../views/NoticiaADetalle.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Benchs from '../views/Benchs.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/bench',
    name: 'Benchs',
    component: Benchs
  },
  {
    path: '/comingSoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/noticia/:id/',
    name: 'Noticia',
    component: NoticiaADetalle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
