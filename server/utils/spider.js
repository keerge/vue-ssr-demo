
const charset = require('superagent-charset')
const superagent = charset(require('superagent'))
module.exports = function(options, params) {
  return new Promise((resolve, reject) => {
    superagent[options.method || 'get'](options.url).send(params || {}).charset(options.charset || 'utf-8').end((err, res) => {
      if (err) {
        console.log(err, 'err!!!!')
        reject(err)
      }
      resolve(res.text)
    })
  })
}
