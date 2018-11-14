exports.seed = knex =>
  knex('filament').del()
    .then(() => knex('filament').insert([
      {name: 'High five blue',
        colour: 'Blue',
        mfg: 'Protopasta',
        type: 'PLA',
        layer: '0.4',
        nozzle: 210,
        bed: 55,
        multiplier: '0.98',
        speed: 60,
        retraction: 30,
        temperature: 23,
        notes: 'none'}
    ])
    )
