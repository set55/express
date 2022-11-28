import {DataTypes, Model, Sequelize} from 'sequelize'
import db from '../lib/db.js'

class Test extends Model {

}

Test.init({
    name: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: db.sequelize,
    tableName: 'test',
    createdAt: false,
    updatedAt: false,
})

export default Test