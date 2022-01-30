const state = {
  userList: [],
  authUser: {}
}

const mutations = {
  setUserList(state, payload) {
    state.userList = payload
  },
  addUserList(state, payload) {
    state.userList.push(payload)
  },
  setAuthUser(state, payload) {
    state.authUser = payload
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
