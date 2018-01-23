var express = require('express')
var router = express.Router()
var spider = require('../utils/spider')
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
          id: (j === 0 ? $(el_li).find('.cont a').attr('href') : $(el_li).find('a').attr('href')).split('/')[5]
        })
      })
    })
    return data
  })
}
const getDouBanNewBooks = function() {
  // return spider({ url: 'https://book.douban.com/latest/' }).then((text) => {
  //   const $ = cheerio.load(text)
  //   const data = []
  //   $('#content ul.cover-col-4 li').each((i, el) => {
  //     data.push({
  //       title: $(el).find('h2 a').text(),
  //       url: $(el).find('.cover').attr('href'),
  //       pic: $(el).find('.cover img').attr('src'),
  //       author: $(el).find('.color-gray').text().split('/')[0]
  //     })
  //   })
  //   return data
  // })
  return spider({ url: 'http://www.duokan.com/' }).then((text) => {
    const $ = cheerio.load(text)
    return $('#module-recommend .j-bookitm').map((i, el) => {
      return {
        title: $(el).find('.title').text(),
        id: $(el).find('.title').attr('href').split('/')[2],
        pic: $(el).find('.cover img').attr('src'),
        author: $(el).find('.u-author span').text()
      }
    }).get()
  })
}

const getPocoChoicePhoto = function() {
  return spider({ url: 'http://photomood.pp.163.com', charset: 'gbk' }).then(text => {
    const $ = cheerio.load(text)
    return $('#p_contents .w-cover').map((i, el) => {
      return {
        title: $(el).find('a').eq(0).attr('title'),
        pic: $(el).find('a').eq(0).find('img').attr('src'),
        date: 123,
        id: $(el).find('a').eq(0).attr('href').split('/')[5].replace('.html', '')
      }
    }).get()
  })
}

router.get('/', (req, res, next) => {
  Promise.all([getGuoKrIndexData(), getDouBanNewBooks(), getPocoChoicePhoto()]).then((values) => {
    res.json({ data: values })
  })
})

module.exports = router
