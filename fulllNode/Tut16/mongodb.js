const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/';
const database = 'Prajjal'
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db =  result.db(database);
    return db.collection('tut');
    // let response = await collection.find({name : 'm40'}).toArray();
    // console.log(response);

}

module.exports = dbConnect;