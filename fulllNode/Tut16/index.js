const dbConnect = require("./mongodb");

// 1 tarika
// dbConnect().then((res) => {
//     res.find({name: "m40"}).toArray().then((data) => {
//         console.warn(data)
//     })
// });

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data)
}

main();