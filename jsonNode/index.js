// JSON stands for Javascript object notation
// JSON is a lightweight
// format for storing and transporting data
// JSON is often used when data is sent from a server to a web page 
const bioData = {
    name : "Prajjal",
    age : "26",
    course : "MCA"
}

// IF we want to convert object into json
const jsonData = JSON.stringify(bioData);
// console.log(jsonData)

// IF we want to convert json into object
const objData = JSON.parse(jsonData)
console.log(objData.name);