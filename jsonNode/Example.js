// 1. Convert to json
// 2. Dusra file ma add karna ha
// 3. readfile
// 4. again convert back to js obj ori
// . Console.log

const fs = require("fs");

const biodata= {
     name  : "Prajjal",
     age : "26",
     course : "MCA"
}

const jsonData = JSON.stringify(biodata);
// console.log(jsonData)
// fs.writeFile("json1.json", jsonData, (err) => {
//      console.log("Done")
// })

fs.readFile("json1.json", "utf-8", (err, data) => {
    // console.log(data)
    const orgData = JSON.parse(data);
    console.log(orgData)
})