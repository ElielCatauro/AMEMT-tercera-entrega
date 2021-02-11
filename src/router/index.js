import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetails from '../views/CharacterDetails.vue'
import Noticias from '../views/Noticias.vue'
import ComingSoon from '../views/ComingSoon.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/comingSoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/character/:id/',
    name: 'Character',
    component: CharacterDetails
  },
]

const router = new VueRouter({
  routes
})

export default router
