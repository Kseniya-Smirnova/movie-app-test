const fs = require('fs');

fs.appendFileSync('src/pages/test.txt', 'data to append v2');

let fileContent = fs.readFileSync('src/test.txt', 'utf8');
console.log(fileContent);

