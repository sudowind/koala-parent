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

const wechatAuthUrl = (type, state) => url.format({
  protocol: 'https',
  host: 'open.weixin.qq.com',
  pathname: 'connect/oauth2/authorize',
  query: {
    appid: 'wx5d0377dccb386b2c',
    redirect_uri: url.format({
      protocol: 'http',
      host: '127.0.0.1:8080',
      pathname: '/api/users/open/oauth/wechat'
    }),
    response_type: 'code',
    scope: type,
    state: state
  },
  hash: 'wechat_redirect'
})

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requireAuth: true
    }
    // beforeEnter: authorHook('snsapi_base', '/')
  },
  {
    path: '/assignments',
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/bookAssignments',
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/passageAssignments',
    meta: {
      requireAuth: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.path === '/wechat_login') {
    const openId = to.params['openId']
    const userId = to.params['childId']
    const status = to.params['status']

    store.commit(types.LOGIN, openId, userId)
    next(status)
    return false
  }

  if (!store.state.openId) {
    location.href = wechatAuthUrl('snsapi_base', to.path)
    return false
  }

  if (to.meta.requireAuth && !store.state.userId) {
    next({
      path: '/binding'
    })
  } else {
    next()
  }
})

export default router
