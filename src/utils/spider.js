
const charset = require('superagent-charset')
const superagent = charset(require('superagent'))
export default function(parm) {
  return new Promise((resolve, reject) => {
    superagent[parm.method || 'get'](parm.url).charset(parm.charset || 'utf-8').end((err, res) => {
      if (err) {
        console.log(err, 'err!!!!')
        reject(err)
      }
      resolve(res.text)
    })
  })
}
