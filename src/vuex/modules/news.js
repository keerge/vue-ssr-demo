const createModule = () => {
  const state = {
    homeArticle: []
  }
  const getters = {
    homeArticle: state => state.homeArticle
  }
  const mutations = {
    GET_HOME_DATA(state, values) {
      state.homeArticle = values[0]
    }
  }
  const actions = {
    getHomeData({ commit, state }) {

    }
  }
  return {
    state,
    getters,
    actions,
    mutations
  }
}
export default createModule

