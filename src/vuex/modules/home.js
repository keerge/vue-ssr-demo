import home from '@/api/home'
const createModule = () => {
  const state = {
    homeArticle: {
      shiwuYan: [
        [
          {

          }
        ],
        [
          {

          }
        ]
      ]
    },
    homeNewBooks: [],
    homePhoto: []
  }
  const getters = {
    homeArticle: state => state.homeArticle,
    homeNewBooks: state => state.homeNewBooks,
    homePhoto: state => state.homePhoto
  }
  const mutations = {
    GET_HOME_DATA(state, values) {
      state.homeArticle = values[0]
      state.homeNewBooks = values[1]
      state.homePhoto = values[2]
    }
  }
  const actions = {
    getHomeData({ commit, state }) {
      return home.getHomeData().then(values => {
        commit('GET_HOME_DATA', values.data)
      }).catch(err => {
        console.log(err)
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
