const express = require('express')
const route = express()
const ctrl = require('./controller')

route.get('/redset', ctrl.redisSet)
route.get('/redget', ctrl.redisGet)
route.get('/rabbit', ctrl.rabbitmq)

module.exports = route
