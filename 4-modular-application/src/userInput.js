// const readline = require('node:readline');
// const read = readline.createInterface(process.stdin, process.stdout)

// read.question('Podaj zdanie jakie chcesz zamienić w banner:\n', value => {
//     makeBanner(value);
//     console.log('Kończę działanie, żegnam...');
//     read.close();
// })


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

function closeInterface() {
  rl.close();
}

module.exports = { askQuestion, closeInterface };