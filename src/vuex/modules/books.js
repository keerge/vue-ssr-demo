import books from '@/api/books'

const createModule = () => {
  const state = {
    BooksListData: [],
    BookDetail: {}
  }
  const getters = {
    BooksListData: state => state.BooksListData,
    BookDetail: state => state.BookDetail
  }
  const mutations = {
    SET_BOOKS_DATA(state, value) {
      state.BooksListData = value
    },
    SET_BOOK_DETAIL(state, value) {
      state.BookDetail = value
    }
  }
  const actions = {
    getBooksListData({ commit, state }) {
      return books.getBooksData().then((res) => {
        commit('SET_BOOKS_DATA', res.data)
      })
    },
    getBooksDetail({ commit, state }, id) {
      return books.getBooksDetail(id).then((res) => {
        commit('SET_BOOK_DETAIL', res.data)
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
