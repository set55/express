import express from 'express';
import logger from '../lib/logger.js'
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  logger.info(`origin_url: ${req.originalUrl}|ip: ${req.ip}|x-forwarded-for: ${req.get('x-forwarded-for')}`)
  res.send('respond with a resource');
});

// module.exports = router;
export default router