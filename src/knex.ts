import knex from "knex";

const db = knex({
  client: "pg", 
  connection: {
    host: "127.0.0.1",
    user: "z2z",
    password: "123456",
    database: "ku",
  }
});

export default db;
