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
    core.setFailed(`Failed directory move for`);
    exec(
    `
       node_modules/.bin/openapi-generator-cli generate -i https://api-internal.marktplaats.eu-central-1.integration.hz-cloud.io/address-api/v1/api-docs/swagger.json -g typescript-axios -o ./test
    `, {
        cwd: process.cwd()
    }
);
    console.log(process.cwd(), readDir());
}

run();
