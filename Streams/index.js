// Streams ak tarah sa jaise ytube video peecha jo white line atti ha chunk wise chota chota data load karrti ha wo ha

// Streams are objects that let you read data from a source or writedata to a destination in continous 
// fashion. In Node.js, there are four types of streams -
// Streaming means listening to music or watching video in 'real time', instead of downloading a file
// to your computer and watching in later
// Readable : Stream which is used for read operation.
// Writable : Stream which is used for write operation.
// Duplex : Stream which can be used for both read and write operation.
// Transform : A type of duplex stream where the output  is computed based on input

// Each type of Stream is an EventEmitter instance and throws several events at different instance of times.
// For example, some of the commonly used events are - 
// data  - This event is fired when there is data is available to read.
// end - This event is fired when there is no more data to read.
// error - This event is fired when there is any error receiving or writing data.
// finish - This event is fired when all the data has been flushed to underlying system


// stream.pipe() : the method used to take a readable stream and connect it to a writable stream

// Task
// Reading from the stream 
// Create a readable stream
// Handle stream events -> data, end and error

const fs = require('fs')
const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile('input.txt', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    // 2nd way Streaming
    // const rstream = fs.createReadStream("input.txt");

    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // })

    // rstream.on("end", () => {
    //     res.end();
    // })
    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("file not found")
    // })

    // 3rd way
    const rstream = fs.createReadStream("input.txt")
    rstream.pipe(res)
})


server.listen(8000, "127.0.0.1");
