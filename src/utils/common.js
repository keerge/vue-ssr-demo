// new webpack.ProvidePlugin({
//     $:require('../src/utils/common'),
//   })
var $ = function() {

}

$.getHeight = () => {
  return document.documentElement.clientHeight
}
$.getScrollTop = () => {
  return document.documentElement.scrollTop
}
$.getClientHeight = () => {
  return document.body.clientHeight
}

$.isScrollEnd = () => {
  return $.getHeight() + $.getScrollTop() === $.getClientHeight()
}
$.throttle = (fn, interval) => {
  var __self = fn
  var timer
  var fitstTime = true
  return function() {
    var args = arguments
    var __me = this
    if (fitstTime) {
      __self.apply(__me, args)
      fitstTime = false
      return fitstTime
    }
    if (timer) {
      return false
    }
    timer = setTimeout(function() {
      clearTimeout(timer)
      timer = null
      __self.apply(__me, args)
    }, interval || 500)
  }
}
$.bridgeGuokeImg = (content) => {
  content = content.replace(/https\:\/\/1-im.guokr.com/g, '/bridge?url=https://1-im.guokr.com')
  content = content.replace(/https\:\/\/2-im.guokr.com/g, '/bridge?url=https://2-im.guokr.com')
  content = content.replace(/https\:\/\/3-im.guokr.com/g, '/bridge?url=https://3-im.guokr.com')
  return content
}
module.exports = $
