
const readline = require('node:readline');
const read = readline.createInterface(process.stdin, process.stdout)

read.question('Podaj zdanie jakie chcesz zamienić w banner:\n', value => {
    makeBanner(value);
    console.log('Kończę działanie, żegnam...');
    read.close();
})


function makeBanner(sentence = '') {
    const words = sentence.split(' ');
    const LEFT_RIGHT_SPAN_LENGTH = 4;
    for (const word of words) {
        const border = '*'.repeat(word.length + LEFT_RIGHT_SPAN_LENGTH);
        console.log(border)
        console.log(`* ${word.toUpperCase()} *`);
        console.log(border)
    }
}