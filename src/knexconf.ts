import type { Knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "z2z",
    password: "123456",
    database: "ZZZ",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "../migrations",
  },
};


export default config;
