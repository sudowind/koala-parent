// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import iView from 'iview'

Vue.use(iView)

import axios from './http'
import store from './store/store'
import router from './router'

import App from './App'

import 'iview/dist/styles/iview.css'

// function isWechat (){
//   return /micromessenger/.test(navigator.userAgent.toLowerCase())
// }

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
