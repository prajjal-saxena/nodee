const express = require('express');
const multer = require('multer')
const app = express()



app.post("/upload", (req, res) => {
    res.send("file upload")
})

app.listen(8000)