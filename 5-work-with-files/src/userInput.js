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