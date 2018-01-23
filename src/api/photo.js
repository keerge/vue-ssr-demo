import request from '@/utils/request'
export default {
  getPhoto() {
    return request({
      url: '/api/photo',
      method: 'get'
    })
  },
  getPhotoDetail(id) {
    return request({
      url: '/api/photo/' + id,
      method: 'get'
    })
  }
}
