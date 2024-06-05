// Importowanie modułu 'path' do pracy ze ścieżkami plików
const path = require('path');

// Funkcja przetwarzająca podaną ścieżkę
function processPath(inputPath, callback) {
  // Normalizowanie ścieżki i dzielenie jej na segmenty
  const segments = path.normalize(inputPath).split(path.sep);
  // Wyświetlanie podanej ścieżki
  console.log(`Podaj ścieżkę: ${inputPath}`);
  // Wyświetlanie liczby segmentów
  console.log(`Liczba segmentów: ${segments.length}`);
  // Wyświetlanie segmentów w formie listy
  console.log(`Segmenty: [${segments.join(', ')}]`);
  if (callback) {
    callback(inputPath, segments);
  }
}

// Eksportowanie funkcji processPath
module.exports = processPath;