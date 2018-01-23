import request from '@/utils/request'
export default {
  getBooksData() {
    return request({
      url: '/api/books',
      method: 'get'
    })
  },
  getBooksDetail(id) {
    return request({
      url: '/api/books/' + id,
      method: 'get'
    })
  }
}
