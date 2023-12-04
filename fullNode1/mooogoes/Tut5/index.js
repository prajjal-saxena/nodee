const express = require('express');
const con = require('./config')

const app = express();
app.get("/", (req, res) => {
    // res.send("route done")
    con.query("select * from users", (err, result) => {
        if(err) {
            res.send("error")
        }
        else{
            res.send(result)
        }
    })
})




app.post("/", (req, res) =>{
    const data = {name : "prajjal", password : "3030", user_type: "visitor"}
    con.query('INSERT INTO users SET ?',data, (error, result, fields) => {
        if(error) error
        res.send(result)
    })
})




// app.put("/", (req, res) => {
//     const data =["tony", '8000', "reader", 3];
//     con.query("UPDATE users SET name = ?, password = ?, user_type = ? where id = ?",data,(err, result, field)=>{
//         if(err) err;
//         res.send(result)
//     })
//     // res.send("Update API working")
// })

app.put("/:id", (req, res) => {
    const data =[req.body.name, req.body.password, req,body.user_type, req.params.id];
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? where id = ?",data,(err, result, field)=>{
        if(err) err;
        res.send(result)
    })
    // res.send("Update API working")
})


app.delete("/:id", (req, res) => {
    con.query("Delete from users where id=" +req.params.id,(error, results)=>{
        if (error) throw error;
        res.send(results)
    })
})
app.listen(5000)