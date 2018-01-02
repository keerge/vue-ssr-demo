
const superagent = require('superagent')
module.exports = function(req, res) {
  const url = req.query.url
  if (!url) {
    res.end('null')
    return false
  }
  superagent.get(req.query.url)
    .set('Referer', '')
    .set('User-Agent',
        'User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Core/1.47.933.400 QQBrowser/9.4.8699.400'
    )
    .end(function(err, result) {
      if (err) {
        return false
      }
      res.end(result.body)
      return
    })
}
