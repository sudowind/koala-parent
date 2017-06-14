import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null
  },
  mutations: {
    login: (state, data) => {
      state.token = data
    },
    logout: (state) => {
      state.token = null
    }
  }
})
