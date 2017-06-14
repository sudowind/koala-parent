import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/homepage.vue'
import Rank from '../components/rank.vue'
import ERscore from '../components/er_score.vue'
import Report from '../components/student_report.vue'

import Binding from '../components/binding/index.vue'
import BindingUser from '../components/binding/user.vue'
import BindingTel from '../components/binding/tel.vue'
import BindingResult from '../components/binding/result.vue'

// import url from 'url'

Vue.use(VueRouter)

// const authorHook = function (authType, state) {
//   return (to, from, next) => {
//     location.href = url.format({
//       protocol: 'https',
//       host: 'open.weixin.qq.com',
//       pathname: 'connect/oauth2/authorize',
//       query: {
//         appid: 'wx5d0377dccb386b2c',
//         redirect_uri: url.format({
//           protocol: 'http',
//           host: '127.0.0.1:8080',
//           pathname: '/oauth/wechat'
//         }),
//         response_type: 'code',
//         scope: authType,
//         state: state
//       },
//       hash: 'wechat_redirect'
//     })
//   }
// }

const routes = [
  {
    path: '/',
    component: Home
    // beforeEnter: authorHook('snsapi_base', '/')
  },
  {
    path: '/binding',
    name: 'binding',
    component: Binding,
    redirect: '/binding/user',
    children: [
      {
        path: 'user',
        component: BindingUser
      },
      {
        path: 'tel',
        component: BindingTel
      },
      {
        path: 'result',
        component: BindingResult
      }
    ]
  },
  {
    path: '/oauth/wechat'
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/er_score',
    component: ERscore
  },
  {
    path: '/report.vue',
    component: Report
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
