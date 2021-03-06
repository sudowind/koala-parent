import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openId: null,
    userId: null
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      state.openId = data.openId
      state.userId = data.userId
    },
    [types.LOGOUT]: (state) => {
      state.openId = null
      state.userId = null
    }
  }
})
