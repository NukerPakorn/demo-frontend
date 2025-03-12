const state = () => ({
  userAgent: null
})
const mutations = {
  setUserAgent (state, data) {
    state.userAgent = data
  }
}
export default {
  state,
  mutations
}
