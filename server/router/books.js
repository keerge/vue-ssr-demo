var express = require('express')
var router = express.Router()
var spider = require('../utils/spider')
const cheerio = require('cheerio')
const getBooksData = () => {
  return spider({ url: 'http://www.duokan.com/r/%E6%A6%9C%E5%8D%95%E5%AE%B6%E6%97%8F' }).then((text) => {
    const $ = cheerio.load(text)
    const data = []
    $('.m-rankarea .ritm').each((i, el) => {
      const _data = {
        name: $(el).find('.u-ttl h2').text(),
        data: []
      }
      $(el).find('.u-txtlst .itm').each((j, aEl) => {
        _data.data.push({
          id: $(aEl).find('.title').attr('href').split('/')[2],
          title: $(aEl).find('.title').text(),
          author: $(aEl).find('.u-author span').text()
        })
      })
      data.push(_data)
    })
    return data
  })
}
const getBooksDetail = (id) => {
  return spider({ url: `http://www.duokan.com/book/${id}` }).then((text) => {
    const $ = cheerio.load(text)
    return {
      title: $('.desc h3').text(),
      img: $('#cover-img img').attr('src'),
      content: $('#book-content').html(),
      toc: $('.toc').html(),
      more: $('.m-recommend .cnt .u-bookitm2').map((i, item) => {
        return {
          id: $(item).find('.title').attr('href').split('/')[2],
          title: $(item).find('.title').text(),
          author: $(item).find('.u-author span').text(),
          img: $(item).find('.cover img').attr('src')
        }
      }).get(),
      desc: {
        author: $('.author a').text(),
        published: $('.published a').text(),
        datePublished: $('.data table tr').eq(2).find('td').eq(1).text()
      }
    }
  })
}
router.get('/', (req, res, next) => {
  getBooksData().then(value => {
    res.send({ data: value })
  })
})
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  getBooksDetail(id).then(value => res.send({ data: value }))
})
module.exports = router
