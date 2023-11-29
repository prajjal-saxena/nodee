   const express = require('express');
   const app = express();

   app.get('', (req, res) => {
    console.log("Data sent by browser =>", req.query)
      res.send("Hello this is home page"+ req.query.name)
   })

   app.get('/about', (req,res) => {
      res.send("Hello this is about page")
   })

   app.listen(5000)