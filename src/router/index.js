import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import childrenRouter from './children'
import descMap from '@/utils/descriptions'
import Store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: childrenRouter
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  Store.commit('initDesc', descMap[to.name])
  next()
})

export default router
