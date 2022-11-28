import {Sequelize} from 'sequelize'
import logger from "./logger.js"
import {to} from 'await-to-js'

const db = {};
logger.info(`database: ${process.env.MYSQL_DATABASE}, host: ${process.env.MYSQL_HOST}`)
db.sequelize = new Sequelize(process.env.MYSQL_DATABASE,
    process.env.MYSQL_USERNAME,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        logging: process.env.SEQUELIZE_LOGGING === 'true' ? console.log : false,
        logQueryParameters: true,
    })

let [err] = await to(db.sequelize.authenticate())
if (err) {
    logger.error(`mysql connect fail: ${err.stack}`)
} else {
    logger.info('connect success')
}

export default db