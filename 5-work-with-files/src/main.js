const fs = require('fs');
const { askQuestion, closeInterface } = require('./userInput');

// Funkcja główna programu
async function main() {
  try {
    // Odczytanie danych z pliku
    const file = fs.readFileSync('data.txt', 'utf8');
    console.log('Zawartość pliku:');
    console.log(file);

    // Zadanie pytania użytkownikowi
    const answer = await askQuestion('Czy chcesz coś dopisać na koniec pliku? (tak/nie): ');

    if (answer.toLowerCase() === 'tak') {
      const newFile = await askQuestion('Wpisz, co chcesz dopisać: ');
      fs.appendFileSync('data.txt', `\n${newFile}`);
      console.log('Dopisano do pliku.');
    } else {
      console.log('Nie dokonano żadnych zmian w pliku.');
    }
  } catch (err) {
    console.error('Wystąpił błąd:', err.message);
  } finally {
    closeInterface();
  }
}

main();