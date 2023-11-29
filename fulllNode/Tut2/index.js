const path = require('path');
const fs  = require('fs');

const dirPath = path.join(__dirname, 'Tut2');

for(i=0; i<5;i++){
    // fs.writeFileSync(dirPath+`Text${i}.txt`, `a simple text ${i} file`)
    fs.writeFileSync(dirPath+"hello"+i+".txt", "a simple text file")
}
console.log(dirPath)


// For reading the directory
fs.readdir(dirPath, (err, Tut2) => {
    Tut2.forEach((item) => {
        console.log(item)
    })
})