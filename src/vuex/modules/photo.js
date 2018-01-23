import photo from '@/api/photo'

const createModule = () => {
  const state = {
    list: [],
    detail: {}
  }
  const getters = {
    photoDetail: state => state.detail,
    photoList: state => state.list
  }
  const mutations = {
    SET_PHOTO_DETAIL(state, value) {
      state.detail = value
    },
    SET_PHOTO_LIST(state, value) {
      state.list = value
    }
  }
  const actions = {
    getPhotoDetail({ commit, state }, id) {
      return photo.getPhotoDetail(id).then(data => {
        commit('SET_PHOTO_DETAIL', data.result)
      })
    },
    getPhotoList({ commit, state }) {
      return photo.getPhoto().then(data => {
        commit('SET_PHOTO_LIST', data.result)
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

