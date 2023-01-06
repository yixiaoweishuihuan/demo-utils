import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import childrenRouter from './children'

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
      name: 'form'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
