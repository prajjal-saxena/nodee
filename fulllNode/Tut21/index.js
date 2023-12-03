const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/Prajjal");
    const ProductSchema = new mongoose.Schema({
        name : String,
        price: Number
    })

    const ProductsModel = mongoose.model('tut', ProductSchema);
    let data = new ProductsModel({name: "m8", price : 1000});
    let result = await data.save();
    console.log(result)
}

main();