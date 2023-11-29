const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end("Hello from the home sides");
    } else if(req.url == "/about"){
        res.end("Hello from the About us sides");
    } else if(req.url == "/userapi") {
        fs.readFile(`userapi.json`, "utf-8", (err, data)=>{
           console.log(data);
           res.end(data)
        });
        // res.end("Hello from the user API"); 
    } else {
        res.writeHead(404, { "Content-type" : "text/html"});
        res.end("<h1>404 error pages. Page doesn't exist</h1>")
    }
})


server.listen(8000, "127.0.0.1", () => {
    console.log('listening to the port no 8000')
})