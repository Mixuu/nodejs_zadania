const sentence = 'To jest mój banner'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
console.log(sentence.split(' '));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
sentence.split(' ').forEach(word => {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    console.log('*'.repeat(word.length + 4))
    console.log('* ' + word.toUpperCase() + ' *')
    console.log('*'.repeat(word.length + 4))
})

for (const letter of 'hello here') {

    // if(letter === 'h') {
    //     continue;
    // }
    console.log(letter);
}

function makeBanner(sentence = '') {
    const words = sentence.split(' ');
    const LEFT_RIGHT_SPAN_LENGTH = 4;
    for (const word of words) {
        const border = '*'.repeat(word.length + LEFT_RIGHT_SPAN_LENGTH);
        console.log(border)
        console.log(`* ${word.toUpperCase()} *`);
        console.log(border)
    }
    // analogicznie:
    // words.forEach(word => {
    //     console.log(word);
    // })
}

makeBanner('hello world')

// text interpolation
console.log(` 2 + 2 * 2 = ${2 + 2 * 2}`)