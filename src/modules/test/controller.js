const ctrl = {}
const redis = require('../../databases/redis')
const amqp = require('amqplib/callback_api')
const logger = require('../../lib/logger')(module)

ctrl.redisSet = async (req, res) => {
   redis.client.setex('testkey', 30, 'berhasil menyimpan data', (err, rep) => {
      if (err) {
         console.log(err)
         logger.error(err)
         res.status(401).json({ message: 'redis not conected' })
         return
      }

      res.status(200).json({ message: 'redis connected' })
   })
}

ctrl.redisGet = async (req, res) => {
   redis.client.get('testkey', (err, rep) => {
      if (err) {
         console.log(err)
         logger.error(err)
         res.status(401).json({ message: 'redis not conected' })
         return
      }

      res.status(200).json({ data: rep })
   })
}

ctrl.rabbitmq = (req, res) => {
   amqp.connect(`amqp://${process.env.AMQP_HOST}`, (err, conn) => {
      if (err) {
         console.log(err)
         logger.error(err)
         res.status(401).json({ message: 'rabit not conected' })
         return
      }

      res.status(200).json({ message: 'rabbit connected' })
   })
}

module.exports = ctrl
