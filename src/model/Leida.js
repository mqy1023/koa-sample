const { Sequelize, Model } = require('sequelize')
const { db } = require('../utils/db')

class Leida extends Model {
}

Leida.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
}, {
    sequelize: db,
    tableName: 'leida',
})

module.exports = {
    Leida
}
