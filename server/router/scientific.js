var express = require('express')
var router = express.Router()
var spider = require('../utils/spider')

router.get('/', (req, res, next) => {
  const page = req.query.page || 0
  spider({ url: `https://www.guokr.com/apis/minisite/article.json?retrieve_type=by_subject&limit=20&offset=${20 * page}&_=1514778947047` }).then((text) => {
    res.json(JSON.parse(text))
  })
})
module.exports = router
