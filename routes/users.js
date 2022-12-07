import express from 'express';
import logger from '../lib/logger.js'
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.headers);
  logger.info(`origin_url: ${req.originalUrl}|ip: ${req.ip}|header: ${JSON.stringify(req.headers)}`)
  res.send(`origin_url: ${req.originalUrl}|ip: ${req.ip}|header: ${JSON.stringify(req.headers)}`);
});

// module.exports = router;
export default router