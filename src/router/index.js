import Vue from 'vue'
import VueRouter from 'vue-router'
import BusquedaView from '../views/BusquedaView.vue'
import HomeView from '../views/HomeView.vue'
import Tabla from '../components/Tabla.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/busqueda',
    name: 'busqueda',
    component: BusquedaView
  },
  {
    path: '/tabla',
    name: 'tabla',
    component: Tabla

  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
