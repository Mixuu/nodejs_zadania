// Importowanie instancji myEmitter
const myEmitter = require('./src/eventEmitter');
// Importowanie funkcji processPath
const processPath = require('./src/pathProcessor');
// Importowanie modułu 'readline' do obsługi wejścia/wyjścia w terminalu
const readline = require('node:readline');

// Tworzenie interfejsu readline do odczytu danych wejściowych i wyjściowych
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funkcja zadająca pytanie użytkownikowi i zwracająca obietnicę
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

// Funkcja główna programu
async function main() {
  // Emitowanie zdarzenia 'onStart'
  myEmitter.emit('onStart');

  // Rejestracja nasłuchiwania zdarzenia 'onStart'
  myEmitter.on('onStart', () => {
    console.log(`Zdarzenie onStart`);
    // Wyświetlanie komunikatu o ładowaniu danych
    console.log("Proszę czekać, ładowanie danych...");
    // Symulacja ładowania danych przez 3 sekundy
    setTimeout(() => {
      // Emitowanie zdarzenia 'onLoad' po upływie 3 sekund
      myEmitter.emit('onLoad');
    }, 3000);
  });

  // Rejestracja nasłuchiwania zdarzenia 'onLoad'
  myEmitter.on('onLoad', async () => {
    console.log(`Zdarzenie onLoad`);
    // Wyświetlanie komunikatu o zakończeniu ładowania danych
    console.log("Dane zostały załadowane.");
    // Zmienna kontrolująca pętlę działania programu
    let keepRunning = true;

    // Pętla działania programu
    while (keepRunning) {
      // Zadanie pytania o ścieżkę
      const inputPath = await askQuestion('Podaj ścieżkę (lub wpisz "koniec" aby zakończyć): ');

      // Sprawdzenie, czy użytkownik chce zakończyć działanie programu
      if (inputPath.toLowerCase() === 'koniec') {
        // Emitowanie zdarzenia 'onClose'
        myEmitter.emit('onClose');
        // Zakończenie pętli
        keepRunning = false;
      } else {
        // Przetwarzanie podanej ścieżki
        processPath(inputPath, (path, segments) => {
          myEmitter.emit('onPathSegmentsRequested', { path, segments });
      });
    }
    }
  });

  myEmitter.on('onPathSegmentsRequested', ({ path, segments }) => {
    console.log(`Zdarzenie onPathSegmentsRequested:`);
    console.log(`Podana ścieżka: ${path}`);
    console.log(`Segmenty: ${segments.join(', ')}`);
  });

  // Rejestracja nasłuchiwania zdarzenia 'onClose'
  myEmitter.on('onClose', () => {
    // Wyświetlanie komunikatu o zakończeniu działania
    console.log(`Zdarzenie onClose:`);
    console.log("Kończę działanie, żegnam...");
    // Zamykanie interfejsu readline
    rl.close();
  });

  // Ponowne emitowanie zdarzenia 'onStart' na początku działania programu
  myEmitter.emit('onStart');
}

// Wywołanie funkcji main
main();