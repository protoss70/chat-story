const fs = require('fs');
const path = require('path');

const buildPath = '../build'; // Replace this with the path to your React app's build folder
const packageJsonPath = "../../App/package.json"; // Replace this with the path to your package.json file

const cssFile = fs.readdirSync(path.join(buildPath, '/static/css')).find(file => file.startsWith('main'));
const jsFile = fs.readdirSync(path.join(buildPath, '/static/js')).find(file => file.startsWith('main'));


console.log(packageJsonPath);
const packageJson = require(packageJsonPath);


packageJson.dependencies.botUICss = `/static/css/${cssFile}`;
packageJson.dependencies.botUIJs = `/static/js/${jsFile}`;


fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Paths updated in package.json');