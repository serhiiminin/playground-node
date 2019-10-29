const path = require('path');

// console.log(path);
const func = (name: string): string => `Hello, ${name}`;

function b() {
    console.log(module);
    console.log(this);
}

b();
