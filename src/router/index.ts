import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Course from '../views/Course.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/courses',
    name: 'course',
    meta:{
      title:'my courses'
    },
    component: Course
  },
  {
    path: '/account',
    name: 'Account',
    meta:{
      title:'account'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  }
]

const DEFAULT_TITLE = 'High Jump'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from)=>{
  Vue.nextTick(()=>{
    if(to.name !='Home')
    document.title = `${DEFAULT_TITLE} - ${to.meta?.title}` 
    else
    document.title = `${DEFAULT_TITLE}` 
  })
})

export default router
