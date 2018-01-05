// import request from '@/utils/request'
import spider from '@/utils/spider'
export default {
  getBooksData() {
    return spider({ url: 'http://www.duokan.com/r/%E6%A6%9C%E5%8D%95%E5%AE%B6%E6%97%8F' }).then((text) => {
      return text
    })
    // return request({
    //   url: '/api/books',
    //   method: 'get'
    // })
  }
}
