const express = require('express');
const dbConnect = require('./mongodb');

const app = express();

app.use(express.json())

app.get('/', async (req, res) =>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data)
  res.send(data)
})

app.post('/', async(req, res)=>{
   console.log(req.body)
  //  res.send({name: 'anil'})
  let data = await dbConnect();
  let result = await data.insertOne(req.body)
  res.send(result)
})

app.listen(5000)