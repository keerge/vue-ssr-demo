import posts from '@/api/15yan'

const createModule = () => {
  const state = {
    posts: [],
    detail: []
  }
  const getters = {
    PostsListData: state => state.posts,
    shiwuYanArticle: state => state.detail
  }
  const mutations = {
    SET_POSTS_DATA(state, value) {
      state.posts = value
    },
    ADD_POSTS_DATA(state, value) {
      state.posts = state.posts.concat(value)
    },
    SET_POSTS_DETAIL(state, value) {
      state.detail = value
    }
  }
  const actions = {
    getPosts({ commit, state }, page = 0) {
      return posts.getPostList(page).then(data => {
        commit(page === 0 ? 'SET_POSTS_DATA' : 'ADD_POSTS_DATA', data.result)
      })
    },
    get15yanArticle({ commit, state }, id) {
      return posts.getDetail(id).then(result => {
        commit('SET_POSTS_DETAIL', result.data)
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

