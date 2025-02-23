import express, { Request, Response } from 'express';
import knex from 'knex';

const app = express();
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

app.use((req: Request, res: Response, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  next();
});

console.log(`zzzzzzz`)


app.get("/q2", (req: Request, res: Response) => {
	
	
	res.write(`zz`)
	res.end()
});

app.get("/q23/:id", (req: Request, res: Response) => {
	
	res.set('Content-Type:text/html;')
	res.write(`zz  ${req.params.id}`)
	res.end()
});

app.get("/data/:id", (req: Request, res: Response) => {
    const id = req.params.id;
   
     const isInteger = /^[0-9]+$/.test(id);
  
   
    
    if (!isInteger) {
        return res.redirect("/");  
    }
    
    
    



    console.log(isInteger)

    res.json({ message: `You requested data for ID: ${id}` });
});


app.get("/q23", (req: Request, res: Response) => {
	
	
	res.write(`zz  qq23`)
	res.end()
});

// Basic route
app.get('/', async (req: Request, res: Response) => {
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
  
  res.end()
//  res.send(`Hello, World! Users: ${JSON.stringify(users)}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
