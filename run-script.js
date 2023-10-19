const fs = require('fs');
const { exec } = require('child_process');

exec(
    `
       node_modules/.bin/openapi-generator-cli generate -i https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml -g typescript-axios -o ./test --additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api,prependFormOrBodyParameters=true --skip-validate-spec 
          --skip-validate-spec
    `, {
        cwd: process.cwd()
    }
);
