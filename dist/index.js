"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
/*
// Configure Knex with SQLite for this example
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite'
  },
  useNullAsDefault: true
});
*/
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
});
console.log(`zzzzzzz`);
app.get("/q2", (req, res) => {
    res.write(`zz`);
    res.end();
});
app.get("/q23/:id", (req, res) => {
    res.set('Content-Type:text/html;');
    res.write(`zz  ${req.params.id}`);
    res.end();
});
app.get("/data/:id", (req, res) => {
    const id = req.params.id;
    const isInteger = /^[0-9]+$/.test(id);
    if (!isInteger) {
        return res.redirect("/");
    }
    console.log(isInteger);
    res.json({ message: `You requested data for ID: ${id}` });
});
app.get("/q23", (req, res) => {
    res.write(`zz  qq23`);
    res.end();
});
// Basic route
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // await db('users').insert({ name: 'Test User' }); // Creates table if it doesn’t exist
    //const users = await db('users').select('*');
    res.write(`<html>
  <head>
	<meta charset="UTF-8">

  </head>
  <title></title>
  <body> 
  qqq
  <h5>Hello use</h5>
  <p>here's nothing for this time</p>
  
  </body>
  </html>`);
    res.end();
    //  res.send(`Hello, World! Users: ${JSON.stringify(users)}`);
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
