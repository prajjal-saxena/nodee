// Concept call Stack, Node api, Callback Queue
console.log('Starting up')

setTimeout(() => {
   console.log("Two second")
}, 2000)

setTimeout(() => {
    console.log("Zero second")
})

console.log("Finishing up");