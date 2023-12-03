const dbConnect = require('./mongodb');


const updateData = async() => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : 'max 4'}, {$set: { name : 'max pro5', price :550}}
    )
    console.warn(result)
}

updateData();