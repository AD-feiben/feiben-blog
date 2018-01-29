// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import '@/styles/index.less'
import '@/utils/axios'
import router from './router'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import VueParticles from 'vue-particles'
import config from './config'
Vue.prototype.$config = config
Vue.use(VueRouter)

FastClick.attach(document.body)
Vue.use(VueParticles)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')