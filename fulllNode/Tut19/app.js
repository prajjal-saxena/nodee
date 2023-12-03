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

// app.put("/", async(req, res) => {
  app.put("/:name", async(req, res) => {
  // console.log(req.body)
   let data = await dbConnect();
  //  let result = data.updateOne(
  //     {name: "nokia 1011"},
  //     {$set: {price: 900}}
  //  )
  
  // let result = data.updateOne(
  //   {name: "nokia 1011"},
  //   {$set: req.body}
  // )

  let result = data.updateOne(
    {name: req.params.name},
    {$set: req.body}
 )
   res.send({result : "update"})
})


app.listen(5000)