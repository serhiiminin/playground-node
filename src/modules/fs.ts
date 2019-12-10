const path = require('path');
const util = require('util');
const fs = require('fs');

// const readdir = util.promisify(fs.readdir);

const currentDirFiles = fs.readdirSync(__dirname);

const list = currentDirFiles.map(fileName => {
  try {
    return fs.readFileSync(path.resolve(__dirname, fileName)).toString();

  } catch (error) {
    console.log(error);
    return fileName;
  }
});
console.log(list);

// console.log({ __dirname, __filename });
