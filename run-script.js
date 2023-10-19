const fs = require('fs');
const { exec } = require('child_process');

exec(
    `
       openapi-generator-cli generate -i https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml -g typescript-axios -o ./test
    `
);
