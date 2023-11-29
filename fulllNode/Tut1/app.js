// let exp = require('./index');
// console.log(exp)




// console hum direct likhta ha kyoki ya global ha but yaha core module use karaga



// hum direct bhi 1 fs ma sa file la sakta ha
// const gs = require('fs').writeFileSync;



// HTTP MOD

// let http = require('http');

// const dataControl = (res, resp)=>{
//     resp.write("Hello, this is prajjal");
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);

// package.json file version btati ha jo hum packages install karta ha
// package-lock.json : ya full detail daaagi haama package kii esa hum delete bhi kar sakta ha

// npm node package manager yaaa basically node ka package ko maintain karta ha 
//Color change karna ka lia
//  let colors  = require('colors');
//  console.log('hello'.green)

 // Node is single threaded or multi threaded
 // Node single threaded hoti ha, Node js 1 bar ma 1 heee command ko run kar sakti ha , multi ko nahi
// Node js is async







// FOR HTTP
// const http = require('http');
// const data = require('./data');

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type' : 'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();

// }).listen(5000)




// Jab hum node execution ma likhata ha node index.js agar hum eska aga kuch likh wo bhi show karra toh hum ya kar sakta ha
// console.log(process.argv[2])
// Example

const fs = require('fs')

const input = process.argv;
// fs.writeFileSync(input[2] , input[3])

if (input[2] == 'add'){
    fs.writeFileSync(input[3], input[4])
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}
else {
    console.log('Invalid input');
}