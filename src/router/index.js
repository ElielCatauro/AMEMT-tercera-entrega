import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Noticia from '../views/Noticias.vue'
import NoticiaADetalle from '../views/NoticiaADetalle.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Benchs from '../views/Benchs.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/benchs',
    name: 'Benchs',
    component: Benchs,
    meta: {requiereAuth :true}
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
  {
    path: '/noticia/',
    name: 'Noticia',
    component: Noticia
  },
  {
    path: "/auth",
     component: Login
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
