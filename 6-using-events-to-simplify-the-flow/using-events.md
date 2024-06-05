# Zadanie 6

> Twoim zadaniem jest zrobienie sztucznego (fake) procesu ładowania programu po jego uruchomieniu. Program będzie służył do prostego wyświetlenia informacji o ilości segmentów w podanej ścieżce.  
> Na razie robimy to sztucznie — w formie tzw. "POC" (Proof of Concept).  
> Symuluj upływający czas: 3 sekund. 

## Wymagania:
- Program powinien być zrobiony jako projekt Nodowy, razem z katalogiem `/src` oraz potrzebnymi modułami. Wykorzystaj zdobytą wiedzę z poprzednich ćwiczeń.
- Program startuje na komendę `npm start`
  
- Użyj Eventów!
  - Po uruchomieniu programu dostajemy event: `onStart`
  - Później symulujemy ładowanie programu z odpowiednim komunikatem `Proszę czekać, ładowanie danych...`.
  - Po załadowaniu danych wysyłamy komunikat `onLoad` i prosimy użytkownika o podanie ścieżki
  - Podanie i potwierdzenie ścieżki wywoła event `onPathSegmentsRequested`
  - Użytkownik ma również możliwość zakończenia programu wpisując po prostu `koniec` - będziemy wysyłać event: `onClose`
- To zadanie pozwoli Ci na emitowanie i odbieranie `event'ów` co z kolei ma doprowadzić do "czytelniejszej" architektury naszego rozwiązania.
- Pamiętaj: warto wykorzystać moduły tzn. oddzielne pliki. Zaplanuj sposób, w jaki zaprogramujesz tę aplikację.
- Poglądowy sposób działania:
```
[Path Segments 1.0]
Proszę czekać, ładowanie danych...

----
Witaj.
Obsługa programu: 
  1. podaj ścieżkę
  lub
  2. wpisz: koniec - aby zakończyć działanie programu
  
Podaj ścieżkę: this/is/it
- Liczba segmentów 3
- Segmenty: ['this', 'is', 'it']

Podaj ścieżkę: somehwuiy326487
- Liczba segmentów 1
- Segmenty: ['somehwuiy326487']

Podaj ścieżkę: c:/window/system32/current/winlogon.log
- Liczba segmentów 5
- Segmenty: ['c:', 'window', 'system32', 'current', 'winlogon.log']

Podaj ścieżkę: koniec
---
Żegnaj.
```
- do poprawnego działania logiki programu warto zastosować wbudowany w Node.js pakiet: `path`
- ważne, aby kod w programie z jednej strony wysyłał `event'y` a z drugiej odbierał i reagował na nie.  
