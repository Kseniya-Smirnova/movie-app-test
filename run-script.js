const fs = require('fs');
const { exec } = require('child_process');

function readDir(dirPath) {
  console.log(dirPath);
  fs.readdir(`${dirPath}`, (err, files) => {
    console.log(1113333555, files);
    // files.forEach(file => {
    //   console.log(file);
    // });
  });
}

function run() {
    exec(
    `
       node_modules/.bin/openapi-generator-cli generate -i https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml -g typescript-axios -o ./test
    `, {
        cwd: process.cwd()
    }
);
    console.log(process.cwd(), readDir());
}

run();
