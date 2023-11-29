const express = require('express');
const app = express();

app.get('', (req, res) => {
   res.send(`<h1>Hello this is home page</h1> <a href='/about'>Go to About page</a>`)
})

app.get('/about', (req,res) => {
   res.send(`
     <input type = 'text' placeholder = "Username" value="${req.query.name}" />
     <button>Click me</button>
   `)
})

app.get('/help', (req, res) => {
    res.send([
        {
            name : 'Prajjal',
            email : 'prajjalsaxena@gmail.com'
        },
        {
            name : "Amit",
            email : 'amit@gmail.com'
        }
    ])
})

app.listen(5000)