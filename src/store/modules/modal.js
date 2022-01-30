const state = {
  modalRegistration: false,
  modalAuthorization: false
}

const mutations = {
  setShowModalRegistration(state, payload) {
    state.modalRegistration = payload
  },
  setShowModalAuthorization(state, payload) {
    state.modalAuthorization = payload
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
