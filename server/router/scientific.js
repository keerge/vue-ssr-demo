var express = require('express')
var router = express.Router()
var spider = require('../utils/spider')
const cheerio = require('cheerio')
const getArticle = (id) => {
  return spider({ url: `https://www.guokr.com/article/${id}` }).then((text) => {
    const $ = cheerio.load(text)
    return {
      // label: $('.content-th .label').map((i, el) => $(el).text()),
      title: $('#articleTitle').text(),
      date: $('.content-th-info span').text(),
      content: $('.document').html()
    }
  })
}
router.get('/', (req, res, next) => {
  const page = req.query.page || 0
  spider({ url: `https://www.guokr.com/apis/minisite/article.json?retrieve_type=by_subject&limit=20&offset=${20 * page}&_=1514778947047` }).then((text) => {
    res.json(JSON.parse(text))
  })
})
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  getArticle(id).then(data => res.send(data))
})
module.exports = router
