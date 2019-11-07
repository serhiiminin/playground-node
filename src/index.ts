const path = require("path");
const util = require("util");
const fs = require("fs");

const readdir = util.promisify(fs.readdir);
readdir(__dirname).then(console.log);

console.log({ __dirname, __filename });
