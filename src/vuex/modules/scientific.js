import scientificApi from '@/api/scientific'
import $ from '@/utils/common'
const createModule = () => {
  const state = {
    scientificArticle: {
      result: []
    },
    articleDetail: {}
  }
  const getters = {
    scientificArticle: state => state.scientificArticle,
    scientificArticleDetail: state => state.articleDetail
  }
  const mutations = {
    SET_S_ARTICLE(state, values) {
      state.scientificArticle.result = values.result
      state.scientificArticle.offset = values.offset
    },
    ADD_S_ARTICLE(state, values) {
      state.scientificArticle.result = state.scientificArticle.result.concat(values.result)
      state.scientificArticle.offset = values.offset
    },
    SET_ARTICLE(state, value) {
      value.content = $.bridgeGuokeImg(value.content)
      state.articleDetail = value
    }
  }
  const actions = {
    GET_SCIENTIFIC({ commit, state }, page) {
      return scientificApi.getScientific(page).then((values) => {
        commit('SET_S_ARTICLE', values)
      })
    },
    ADD_SCIENTIFIC({ commit, state }, page) {
      return scientificApi.getScientific(page).then((values) => {
        commit('ADD_S_ARTICLE', values)
      })
    },
    getScientificArticle({ commit, state }, id) {
      return scientificApi.getArticle(id).then(res => {
        commit('SET_ARTICLE', res)
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
