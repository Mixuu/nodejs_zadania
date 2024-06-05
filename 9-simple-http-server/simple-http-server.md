# Zadanie 9

> Wykonaj serwer, który będzie uruchamiał się na porcie zależnym od zmiennej środowiskowej `PORT`.
> Powinien on prezentować zawartość danych z pliku `data.json` na ścieżce `/data`.  

## Wymagania:
- wykonaj endpoint: `/data` pokazujący zawartość pliku `data.json` - jako typ: `JSON`
- każdy inny endpoint powinien pokazywać błąd: `"404 - nie znam ścieżki N"`, gdzie `N` - to faktyczny adres `url` na który wszedł użytkownik
