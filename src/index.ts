const path = require('path');
const util = require('util');
const fs = require('fs');

const readdir = util.promisify(fs.readdir);

const func = (name: string): string => `Hello, ${name}`;

readdir(__dirname).then(console.log);
