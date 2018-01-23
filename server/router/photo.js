var express = require('express')
var router = express.Router()
var spider = require('../utils/spider')
const cheerio = require('cheerio')
router.get('/', (req, res, next) => {
  spider({ url: 'http://photomood.pp.163.com', charset: 'gbk' }).then(text => {
    const $ = cheerio.load(text)
    return $('#p_contents .w-cover').map((i, el) => {
      return {
        title: $(el).find('a').eq(0).attr('title'),
        pic: $(el).find('a').eq(0).find('img').attr('src'),
        id: $(el).find('a').eq(0).attr('href').split('/')[5].replace('.html', '')
      }
    }).get()
  }).then((result) => {
    res.send({ result })
  })
})
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  spider({ url: `http://pp.163.com/photomood/pp/${id}.html`, charset: 'gbk' }).then((text) => {
    const $ = cheerio.load(text)
    return {
      title: $('#p_username_copy').text(),
      content: $('.data-lazyload-src').map((i, el) => {
        return `<img src="/bridge?url=${$(el).attr('data-lazyload-src')}" />`
      }).get().join('')
    }
  }).then((result) => {
    res.send({ result })
  })
})
module.exports = router

