import request from '@/utils/request'
export default {
  getPostList(page) {
    return request({
      url: '/api/15yan',
      method: 'get',
      params: {
        page
      }
    })
  },
  getDetail(id) {
    return request({
      url: '/api/15yan/' + id,
      method: 'get'
    })
  }

}
