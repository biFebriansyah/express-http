const env = require('dotenv')
const redisHelper = require('./src/databases/redis')
let bootstrap = {}

bootstrap.beginAppBootstrap = async function () {
   try {
      env.config()
      await redisHelper.initialize()
   } catch (ex) {
      console.error(ex)
      process.exit(-1)
   }
}

module.exports = bootstrap
