import express from 'express';
import {to} from 'await-to-js';
import logger from '../lib/logger.js'
import TestRepository from "../repositories/TestRepository.js";

let router = express.Router();


/* GET users listing. */
router.get('/create/:testName', async function(req, res, next) {
    logger.info(`testName ${req.params.testName}`);
    let [err, test] = await to (TestRepository.create({name: req.params.testName}));
    if (err) {
        res.status(422).send(`create test model fail: ${err.message}`);
        return;
    }
    res.send(`create succeed: ${test.name}`);
});

// module.exports = router;
export default router