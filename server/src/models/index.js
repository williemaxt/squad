const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// We will include this file in all others
fs.readdirSync(__dirname)
.filter((file) =>
file !== 'index.js') // read all files except index.js
.forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file))
  db[model.name] = model
})

// declare both capital and lowercase sequelize
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
