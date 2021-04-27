const express = require('express');
const app =express();
const port = process.env.PORT;

const{client} = require('pg');
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: true
})
client.connect();

app.get('/',(req,res)=>{
	client.query('INSERT into visits (created_at) values (NOW())',(err,response)=> {
		if (err){
			throw err;
		}
		return res;
	})
	return res.send('Successfully Recorded the Visit');
})
app.listen(port,()=>{console.log('SERVER STARTED')});