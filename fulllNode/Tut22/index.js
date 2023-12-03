const mongoose = require('mongoose');

// const main = async () => {
//     await mongoose.connect("mongodb://0.0.0.0:27017/Prajjal");
//     const ProductSchema = new mongoose.Schema({
//         name : String,
//         price: Number
//     })

//     const ProductsModel = mongoose.model('tut', ProductSchema);
//     let data = new ProductsModel({name: "m8", price : 1000});
//     let result = await data.save();
//     console.log(result)
// }


const updateInDB = async() =>{
    await mongoose.connect("mongodb://0.0.0.0:27017/Prajjal");
    const ProductSchema = new mongoose.Schema({
        name : String,
        price: Number
    })
    const Product = mongoose.model('tut', ProductSchema);
    let data = await Product.updateOne(
        {name : "m8"},
        {
            $set:{price: 700 , name : 'max 8'}
        }
    )
    console.log(data)
}

const deleteInDB = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/Prajjal");
    const ProductSchema = new mongoose.Schema({
        name : String,
        price: Number
    })
    const Product = mongoose.model('tut', ProductSchema);
    let data= await Product.deleteOne({name: 'max 8'});
    console.log(data)
}

const findInDB = async () => {
    const Product = mongoose.model('tut', ProductSchema);
    let data = await Product.find({name : 'm8'})
    console.log(data)
}
