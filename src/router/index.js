import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/store'
import * as types from '../store/types'

import Home from '../components/homepage.vue'
import Rank from '../components/rank.vue'
import ERscore from '../components/er_score.vue'
import Report from '../components/student_report.vue'

import Binding from '../components/binding/index.vue'
import BindingUser from '../components/binding/user.vue'
import BindingTel from '../components/binding/tel.vue'
import BindingResult from '../components/binding/result.vue'

import url from 'url'

Vue.use(VueRouter)

const wechatAuthUrl = (type, redirectUri, state) => url.format({
  protocol: 'https',
  host: 'open.weixin.qq.com',
  pathname: 'connect/oauth2/authorize',
  query: {
    appid: 'wx5d0377dccb386b2c',
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: type,
    state: state
  },
  hash: 'wechat_redirect'
})

const routes = [
  {
    path: '/',
    component: Home
    // meta: {
    //   requireAuth: true
    // }
  },
  {
    path: '/assignments'
    // meta: {
    //   requireAuth: true
    // }
  },
  {
    path: '/bookAssignments'
    // meta: {
    //   requireAuth: true
    // }
  },
  {
    path: '/passageAssignments'
    // meta: {
    //   requireAuth: true
    // }
  },
  {
    path: '/binding',
    name: 'binding',
    component: Binding,
    redirect: '/binding/user',
    children: [
      {
        path: 'user',
        name: 'binding-user',
        component: BindingUser
      },
      {
        path: 'tel',
        name: 'binding-tel',
        component: BindingTel
      },
      {
        path: 'result',
        name: 'binding-result',
        component: BindingResult
      }
    ]
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

router.beforeEach((to, from, next) => {
  if (to.path === '/wechat_login') {
    const openId = to.query['openId']
    const userId = to.query['userId']
    const status = to.query['status']

    store.commit(types.LOGIN, { openId, userId })

    console.log('state = ', status)
    next(status)
    return false
  }

  if (!store.state.openId) {
    const redirectUri = `http://127.0.0.1:8080/api/users/open/oauth/wechat?next=${to.path}`
    location.href = wechatAuthUrl('snsapi_base', redirectUri)
    return false
  }

  if (to.meta.requireAuth && !store.state.userId) {
    console.log('open id = ', store.state.openId)
    console.log('user id = ', store.state.userId)
    next({
      path: '/binding'
    })
  } else {
    next()
  }
})

export default router
