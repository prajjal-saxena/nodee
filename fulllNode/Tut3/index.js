let a= 20;
let b = 0;

// let waitingData = new Promise((resolve, reject) =>  {
//     setTimeout(() =>{
//         b =30
//     })                            yaha syncronously chala
// })
// console.log(a+b)


// Toh eska sol hama promise daata ha
let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    },2000)
})

waitingData.then((data) => {
    b = data;
    console.log(a+b)
})