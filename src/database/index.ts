const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Products = require('../model/Product')
const connection = new Sequelize(dbConfig)

Products.init(connection)

module.exports = connection