import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
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
    }
  ]
})
