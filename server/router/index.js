var express = require('express')
var router = express.Router()
router.use('/home', require('./home'))
router.use('/scientific', require('./scientific'))
router.use('/books', require('./books'))
router.use('/15yan', require('./15yan'))
router.use('/photo', require('./photo'))
module.exports = router
