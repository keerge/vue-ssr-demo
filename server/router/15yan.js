var express = require('express')
var router = express.Router()
var spider = require('../utils/spider')
const cheerio = require('cheerio')
router.get('/', (req, res, next) => {
  const page = req.query.page || 0
  spider({ url: `http://www.15yan.com/apis/story.json?offset=${page * 10}&limit=10&retrieve_type=by_topic&topic_id=9xmXAhXKkxB&_=1515221650111` }).then((text) => {
    res.json(JSON.parse(text))
  })
})
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  spider({ url: 'http://www.15yan.com/topic/shang-liu-UpFlow/' + id }).then((text) => {
    const $ = cheerio.load(text)
    return {
      title: $('.post-title').text(),
      subtitle: $('.post-subtitle').text(),
      cover: $('.story-cover-image').attr('data-bg_img'),
      content: $('#noteArea').html()
    }
  }).then((result) => {
    res.send({ data: result })
  })
})
module.exports = router
