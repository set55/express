import {to} from 'await-to-js'
import Test from '../models/Test.js'



class TestRepository {
    async getById(id) {
        let [err, test] = await to (Test.findOne({
            where: {
                id,
            }
        }))
        if (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(test)
    }

    async create(obj) {
        let [err, test] = await to (Test.create(obj));
        if (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(test);
    }
}

export default new TestRepository()