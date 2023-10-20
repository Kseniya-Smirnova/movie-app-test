const fs = require('fs');
const { exec } = require('child_process');
const core = require('@actions/core');

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
    core.setFailed(`Failed directory move for 1`);
    core.setFailed(`Failed directory move for 2`);
    exec(
    `
       node_modules/.bin/openapi-generator-cli generate -i https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/json/petstore-simple.json -g typescript-axios -o ./test
    `, {
        cwd: process.cwd()
    }
);
    console.log(process.cwd(), readDir());
}

run();
