const express = require('express')
const app = express();

// Middleware
const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please Provide age")
    }
    else if (req.query.age < 18){
        res.send("You cannot access  this page")
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send("Welcome to Home Page")
})

app.get('/users', (req, res) => {
    res.send("Welcome to User Page")
})

app.listen(5000)