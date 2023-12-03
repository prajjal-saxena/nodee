const dbConnect = require('./mongodb');

const deleteData = async() => {
    // console.log("function called");
    let data = await dbConnect();
    let result = await data.deleteOne({name : "Bhanu"})
    console.warn(result)
}

deleteData();