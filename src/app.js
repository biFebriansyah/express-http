require('dotenv').config()
const express = require('express')
const app = express()
const routers = require('./router')
const morgan = require('./lib/morgan')

app.use(morgan)
app.use('/', routers)

module.exports = app
