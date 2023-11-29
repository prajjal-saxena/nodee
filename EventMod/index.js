// Events Module
// Node.js has a built-in module, called "Events"
// where you can create-, fire-, and listen for- your own events.

// Example 1 - Registering for the event to be fired only one time using once.

// Example 2 - Create an event emitter instance and register a couple of callbacks

// Example 3 - Registering for the event with callback parameters.


const EventEmitter = require("events"); // basically yaha humna variable ma capital letter start and middle ma esliye lia ha kyoki hum class create kar raha ha event ki help sa

const event = new EventEmitter();


// event.on('sayMyName', () => {
//     console.log("My name is prajjal")
// })

// event.emit("sayMyName")


event.on("checkpage", (sc, msg) => {
    console.log(`status code is ${sc} and ${msg}`)
})

event.emit("checkpage", 200, "ok");