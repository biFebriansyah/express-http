const express = require('express')
const router = express()

const test = require('../modules/test/route')

router.use('/test', test)

module.exports = router
