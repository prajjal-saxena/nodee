const express = require('express');
const con = require('./config')
const cors=require('cors')

const  app = express();

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    con.query("select * from form", (err, result) => {
        if(err) {
            res.send("error")
        }
        else{
            res.send(result)
        }
    })
})

app.post("/", (req, res) =>{
    // const data = {name : "rohan", number : "9287374384", mail : "test"}
    const data = {
        name : req.body.name,
        number : req.body.number,
        mail : req.body.mail
    }
    // const data = [req.body.name, req.body.mobile, req.body.mail]
    con.query('INSERT INTO form SET ?',data, (error, result, fields) => {
        if(error) throw error
        res.send(result)
    })
})


app.listen(5000)