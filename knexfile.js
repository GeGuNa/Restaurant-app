// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'ku',
      user:     'z2z',
      host: 'localhost',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
		tableName: 'knex_migrations',
		directory: "./migrations",
    }
  },
/*
  staging: {
    client: 'postgresql',
    connection: {
      database: 'zzz',
      user:     'z2z',
      host: 'localhost',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
	directory: "./migrations",
    },
       debug: true,
  },
*/
/*
  production: {
    client: 'postgresql',
    connection: {
      database: 'zzz',
      user:     'z2z',
      host: 'localhost',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
	tableName: 'knex_migrations',
	directory: "./migrations",
    }
  }*/

};
