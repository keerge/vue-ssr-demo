
import request from '@/utils/request'
export default {
  getHomeData() {
    return request({
      url: '/api/home',
      method: 'get'
    })
  }
}

