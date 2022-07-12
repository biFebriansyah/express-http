const ctrl = {}
const logger = require('../../lib/logger')(module)

ctrl.get = async (req, res) => {
   try {
      res.json().send({
         name: 'name',
         email: 'email'
      })
   } catch (error) {
      logger.error(error)
   }
}

module.exports = ctrl
