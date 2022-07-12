const express = require('express')
const route = express()
const ctrl = require('./controller')

route.get('/', ctrl.get)

module.exports = route
