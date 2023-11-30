const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'files')
console.log(publicPath)

// app.use(express.static(publicPath)) // here static method loads the static page.

app.set('view engine', 'ejs');

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (_, res) => {
    const user = {
        name : 'Prajjal',
        email : "test@gmail.com",
        city : "Noida",
        skills : ["JAVA", "PHP", "C++"]
    }
    res.render('profile', {user})
})


app.get('/about', (_, res) => {
     res.sendFile(`${publicPath}/about.html`)
})

app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/help.html`)
})
app.listen(5000)