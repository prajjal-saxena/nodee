const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'files')
console.log(publicPath)

// app.use(express.static(publicPath)) // here static method loads the static page.


app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, res) => {
     res.sendFile(`${publicPath}/about.html`)
})

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/help.html`)
})
app.listen(5000)