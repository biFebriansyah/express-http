const { Sequelize } = require('sequelize')

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   dialect: 'postgres',
   dialectOptions: {
      timezone: process.env.DB_TIMEZONE
   }
})

module.exports = () => {
   return new Promise(async (resolve, reject) => {
      db.authenticate()
         .then(() => {
            resolve(db)
         })
         .catch((err) => {
            reject(err)
         })
   })
}
