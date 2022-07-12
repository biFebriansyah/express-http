const winston = require('winston')
const Sentry = require('winston-transport-sentry-node').default

const levels = {
   error: 0,
   warn: 1,
   info: 2,
   http: 3,
   debug: 4
}

const level = () => {
   const env = process.env.NODE_ENV || 'development'
   const isDevelopment = env !== 'production'
   return isDevelopment ? 'debug' : 'warn'
}

const colors = {
   error: 'red',
   warn: 'yellow',
   info: 'green',
   http: 'magenta',
   debug: 'white'
}

winston.addColors(colors)

const format = (callModule) => {
   let moduelName = '*'
   if (typeof callModule === 'string') {
      moduelName = callModule
   } else {
      const parts = callModule.filename.split('/')
      moduelName = parts[parts.length - 2] + '/' + parts.pop()
   }

   return winston.format.combine(
      // Add the message timestamp with the preferred format
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm' }),
      // Tell Winston that the logs must be colored
      winston.format.colorize({ all: true }),
      // Set filename in log
      winston.format.label({ label: moduelName }),
      // Define the format of the message showing the timestamp, the level and the message
      winston.format.printf(
         (info) => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
      )
   )
}

const transports = [
   new winston.transports.Console(),
   new Sentry({
      sentry: { dsn: process.env.SENTRY_DSN }
   })
]

module.exports = (callModule) => {
   return winston.createLogger({
      level: level(),
      levels,
      format: format(callModule),
      transports
   })
}
