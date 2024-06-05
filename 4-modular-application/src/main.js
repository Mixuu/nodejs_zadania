const makeBanner = require('./bannerGenerator');
const { askQuestion, closeInterface } = require('./userInput');

async function main() {
    console.log(`
    ****************************************
    *   WITAJ W GENERATORZE BANNERÓW [!]   *
    ****************************************
    `);
    let keepRunning = true;

    while (keepRunning) {
        const sentence = await askQuestion('Podaj zdanie jakie chcesz zamienić w banner: ');
        makeBanner(sentence);

        const action = await askQuestion('Co robimy dalej - wpisz odpowiednią literę:\n[k]oniec\n[n]astępny banner\n');
        
        if (action.toLowerCase() === 'k') {
            console.log("Kończę działanie, żegnam...");
            keepRunning = false;
        } else if (action.toLowerCase() !== 'n') {
            console.log(`Nieobsługiwany wybór "${action}"`);
        }
    }

    closeInterface();
    }

main();

// const words = sentence.split(' ');

// words.forEach(word =>  makeBanner(word));