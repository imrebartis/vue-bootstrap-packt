// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App'
import Home from '@/components/Home'
import Hello from '@/components/Hello'
import Bye from '@/components/Bye'

Vue.config.productionTip = false

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      component: Home,
      path: '/'
    },
    {
      name: 'hello',
      component: Hello,
      path: '/hello'
    },
    {
      name: 'bye',
      component: Bye,
      path: '/bye'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
