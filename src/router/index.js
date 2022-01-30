import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {auth: false},
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    meta: {auth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/MyProfile.vue')
  },
  {
    path: '*',
    redirect: {name: 'Home'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(item => item.meta.auth)
  const profile = JSON.parse(localStorage.getItem('profileUser'))
  if (requireAuth && !Object.keys(profile).length > 0) {
    next({name: 'Home'})
  } else {
    next()
  }
})
export default router
