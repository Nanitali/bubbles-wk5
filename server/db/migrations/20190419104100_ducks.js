exports.up = (knex, Promise) => {
  return knex.schema.createTable('ducks', table => {
    table.increments('id').primary()
    table.integer('lat')
    table.integer('lng')
    table.string('name')
    table.string('contact')
    table.string('details')
    table.string('timeframe')
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ducks')
}
