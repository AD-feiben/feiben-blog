import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => { require(['@/views/home'], resolve) }
    },
    {
      path: '/categories',
      name: 'categories',
      component: resolve => { require(['@/views/home'], resolve) }
    },
    {
      path: '/tags',
      name: 'tags',
      component: resolve => { require(['@/views/home'], resolve) }
    },
    {
      path: '/archives',
      name: 'archives',
      component: resolve => { require(['@/views/home'], resolve) }
    },
    {
      path: '/contact',
      name: 'contact',
      component: resolve => { require(['@/views/home'], resolve) }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: resolve => { require(['@/components/Detail'], resolve) }
    }
  ]
})
