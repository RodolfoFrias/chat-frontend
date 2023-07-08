export const state = () => ({})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  nuxtWebSocket(state) {
    return state.socket
  }

}

export const mutations = {
  initSocket(state, socket) {
    state.socket = socket
  }
}
