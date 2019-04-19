const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDucks,
  addDuck
}

function getDucks (db = connection) {
  return db('ducks')
    .select()
}
function addDuck (newDuck, db = connection) {
  return db('ducks')
    .insert(newDuck)
}
