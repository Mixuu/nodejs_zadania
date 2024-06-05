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

module.exports = makeBanner;