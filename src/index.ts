import express, { Request, Response } from 'express';
import knex from './knex';
import {isInteger} from './inc/functions';
const app = express();
const port = 3000;



app.use((req: Request, res: Response, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  next();
});

console.log(`zzzzzzz`)


app.get("/q2", (req: Request, res: Response) => {
	
	
	res.write(`zz`)
	res.end()
});

app.get("/q23/:id", async (req: Request, res: Response) => {
	
	const q = req.params.id
	if (!isInteger(q))return res.redirect("/")
	var q2131zq = await knex('accs').where('userId',q).first()
	
	if (!q2131zq)return res.redirect("/")
	
	//var q21 =  knex('accs').where('userId',1).first()
	
	
	
	console.log(q2131zq)
	
	
	
	res.set('Content-Type:text/html;')
	res.write(`zz  ${req.params.id}`)
	res.end()
});

app.get("/data/:id", (req: Request, res: Response) => {
    const id = req.params.id;
   
     const isInteger2 = /^[0-9]+$/.test(id);
  
   
    
    if (!isInteger2) {
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
