const dbConnect = require('./mongodb')

const insert = async() => {
    console.log("insert function")
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name: 'max 1', brand: 'mi', price: 32},
            {name: 'max 2', brand: 'oppo', price: 32},
            {name: 'max 3', brand: 'moto', price: 32},
            {name: 'max 4', brand: 'vivo', price: 32}
        ]
    )
    // console.log(result)
    if(result.acknowledged){
        console.log('data inserted')
    }
}

insert()