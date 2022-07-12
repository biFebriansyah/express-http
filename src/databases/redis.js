const redis = require('redis')

class RedisHelper {
   static async initialize() {
      this.client = redis.createClient({
         host: process.env.SERVER_REDIS_HOST,
         port: process.env.SERVER_REDIS_PORT
      })
   }

   get client() {
      return this.client
   }
}

module.exports = RedisHelper
