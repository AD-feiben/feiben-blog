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
      component: resolve => { require(['@/views/category'], resolve) }
    },
    {
      path: '/tags',
      name: 'tags',
      component: resolve => { require(['@/views/tag'], resolve) }
    },
    {
      path: '/archives',
      name: 'archives',
      component: resolve => { require(['@/views/archive'], resolve) }
    },
    {
      path: '/contact',
      name: 'contact',
      component: resolve => { require(['@/views/contact'], resolve) }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: resolve => { require(['@/views/detail'], resolve) }
    }
  ]
})
