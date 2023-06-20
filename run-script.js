const fs = require('fs');

// fs.appendFileSync('src/test.txt', 'data to append');

let fileContent = fs.readFileSync('src/test.txt', 'utf8');
console.log(fileContent);

