const fs = require('fs');
const { exec } = require('child_process');

function readDir(dirPath) {
    console.log(dirPath, process.cwd());
    fs.readdir(`${dirPath}`, (err, files) => {
        files.forEach(file => {
            console.log('Files: ', file);
        });
    });
}

function run() {
    exec(
        `
       openapi-generator-cli generate -i https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml -g typescript-axios -o ./test
    `, {
            cwd: process.cwd()
        }
    );
    readDir('./test');
}

run();
