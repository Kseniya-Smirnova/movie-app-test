const fs = require('fs');

fs.appendFileSync('src/message.txt', 'data to append');

let fileContent = fs.readFileSync('src/message.txt', 'utf8');
console.log(fileContent);
