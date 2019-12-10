#!/usr/bin/env node

// const args = process.argv

// args[0] - path to bin
// args[1] - path to current file

const yargs = require('yargs');

const args = process.argv.slice(2);

// console.log(args);
// console.log(yargs.argv);

yargs.command(
  'add',
  'Add a new note',
  {
    title: {
      description: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Note body',
      demandOption: true,
      type: 'string',
    }
  }, args => {
    console.log('Adding...', args);
  }
);

console.log('CLI works'); 

yargs.parse();

