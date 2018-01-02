import spider from '@/utils/spider'

// const cheerio = require('cheerio')

const getScientific = function() {
  return spider({ url: 'https://www.guokr.com/apis/minisite/article.json?retrieve_type=by_subject&limit=20&offset=0&_=1514778947047' }).then((text) => {
    return JSON.parse(text)
  })
}
export default {
  getScientific
}
