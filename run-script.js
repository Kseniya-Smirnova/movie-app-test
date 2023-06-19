const fs = require('fs');

fs.appendFileSync('message.txt', 'data to append');

let fileContent = fs.readFileSync('message.txt', 'utf8');
console.log(fileContent);
