import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Form from '../views/Form/Form'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'form',
        component: Form,
        meta: {
          title: '表单校验'
        }
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
