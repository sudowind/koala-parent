// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/homepage.vue'
import Rank from './components/rank.vue'
import ERscore from './components/er_score.vue'
import Report from './components/student_report.vue'

import 'jquery'
import 'bootstrap/dist/js/bootstrap'

// import Hello from './components/Hello'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/erscore',
    component: ERscore
  },
  {
    path: '/report',
    component: Report
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
