const express = require('express')
const reqFilter = require('./middleware')

const app = express();
const route = express.Router();
route.use(reqFilter)
// Route level Middleware

// app.use(reqFilter)

app.get('/', (req, res) => {
    res.send("Welcome to Home Page")
})

app.get('/users', (req, res) => {  // Apply middleware on single route
    res.send("Welcome to User Page")
})

route.get('/about', (req, res) => {
    res.send("Welcome to About page")
})

route.get('/contact', (req, res) => {
    res.send("Welcome to Contact page")
})

app.use('/', route)
app.listen(5000)