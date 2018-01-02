import spider from '@/utils/spider'

const cheerio = require('cheerio')

const getGuoKrIndexData = function() {
  return spider({ url: 'https://www.guokr.com/' }).then((text) => {
    const $ = cheerio.load(text)
    const data = {
      swiper: [],
      recosArticle: [],
      shiwuYan: []
    }
    $('.focus-content a').each((i, el) => {
      data.swiper.push({
        pic: $(el).find('img').attr('src'),
        url: $(el).attr('href')
      })
    })
    $('.recos-article a').each((i, el) => {
      data.recosArticle.push({
        title: $(el).attr('title'),
        url: $(el).attr('href'),
        postId: null
      })
    })
    $('.contents').eq(1).find('.contents-l .content').each((i, el) => {
      data.shiwuYan[i] = []
      $(el).find('li').each((j, el_li) => {
        data.shiwuYan[i].push({
          title: j === 0 ? $(el_li).find('.cont a').text() : $(el_li).find('a').text(),
          pic: j === 0 ? $(el_li).find('.img img').attr('src') : null,
          url: j === 0 ? $(el_li).find('.cont a').attr('href') : $(el_li).find('a').attr('href')
        })
      })
    })
    return data
  })
}
const getDouBanNewBooks = function() {
  return spider({ url: 'https://book.douban.com/latest/' }).then((text) => {
    const $ = cheerio.load(text)
    const data = []
    $('#content ul.cover-col-4 li').each((i, el) => {
      data.push({
        title: $(el).find('h2 a').text(),
        url: $(el).find('.cover').attr('href'),
        pic: $(el).find('.cover img').attr('src'),
        author: $(el).find('.color-gray').text().split('/')[0]
      })
    })
    return data
  })
}

const getPocoChoicePhoto = function() {
  return spider({ url: 'http://my.poco.cn/act/act_list.htx&user_id=53751805&act_type_id=0&is_vouch=1', charset: 'gb2312' }).then(text => {
    const $ = cheerio.load(text)
    const data = []
    $('.ul_act_list li').not('.d_line').each((i, el) => {
      data.push({
        title: $(el).find('.title a').eq(0).text(),
        pic: $(el).find('.summary p').eq(0).find('img').attr('src'),
        date: $(el).find('.info').not('a').text()
      })
    })
    return data
  })
}
export default {
  getGuoKrIndexData,
  getDouBanNewBooks,
  getPocoChoicePhoto
}
