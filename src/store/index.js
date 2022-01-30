import Vue from 'vue'
import Vuex from 'vuex'

import modal from '@/store/modules/modal'
import users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    modal,
    users
  }
})
