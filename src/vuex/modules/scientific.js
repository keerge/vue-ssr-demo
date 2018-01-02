import scientificApi from '@/api/scientific'
const createModule = () => {
  const state = {
    scientificArticle: {
      result: []
    },
    isloading: false
  }
  const getters = {
    scientificArticle: state => state.scientificArticle,
    scientificArticle_isloading: state => state.isloading
  }
  const mutations = {
    SET_Scientific_Article(state, values) {
      state.scientificArticle.result = values.result
      state.scientificArticle.offset = values.offset
    },
    ADD_Scientific_Article(state, values) {
      state.scientificArticle.result = state.scientificArticle.result.concat(values.result)
      state.scientificArticle.offset = values.offset
    },
    SET_LOADING(state, value) {
      state.isloading = value
    }
  }
  const actions = {
    GET_SCIENTIFIC({ commit, state }, page) {
      commit('SET_LOADING', true)
      return scientificApi.getScientific(page).then((values) => {
        commit('SET_LOADING', false)
        commit('SET_Scientific_Article', values)
      })
    },
    ADD_SCIENTIFIC({ commit, state }, page) {
      commit('SET_LOADING', true)
      return scientificApi.getScientific(page).then((values) => {
        commit('SET_LOADING', false)
        commit('ADD_Scientific_Article', values)
      })
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
