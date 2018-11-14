const knex = require('knex')
const config = require('../knexfile.js')['development']
const connection = knex(config)

module.exports = {
  getData
}

function getData (db = connection) {
  return db('filament')
}
