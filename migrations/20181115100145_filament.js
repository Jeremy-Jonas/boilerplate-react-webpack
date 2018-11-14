exports.up = knex =>
  knex.schema.createTable('filament', t => {
    t.increments('id').primary()
    t.string('name') // filament name
    t.string('colour') // filament colour
    t.string('mfg') // manufacturer
    t.string('type') // type of filament
    t.string('layer') // layer height
    t.integer('nozzle') // nozzle temperature
    t.integer('bed') // bed temperature
    t.string('multiplier') // extrusion multiplyer
    t.integer('speed') // speed in mm/s
    t.integer('retraction') // retraction speed
    t.integer('temperature') // external temperature on day of recording params
    t.string('notes') // user can add any other notes/values not specified
  })

exports.down = knex =>
  knex.schema.dropTable('filament')
