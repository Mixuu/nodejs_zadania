# Zadanie 3

> Powtórz wszystkie operacje z poprzedniego zadania: [Zadanie 2 / initial-project](../2-initial-project/initial-project.md)  
> _JEDNAK_ program ma uruchamiać się po wygonaniu komendy: `npm run my-program`  
> ... oraz posiadać dodatkowe funkcjonalności opisane w wymaganiach poniżej.

## Wymagania:
- po wpisaniu komendy `npm run my-program` program powinien się uruchomić
- na ekranie powinien pojawić się napis:
```
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************

Podaj zdanie jakie chcesz zamienić w banner:
_
```
- użytkownik powinien mieć możliwość wpisania / podania wartości do programu.
- po wpisaniu zdania powinno ono podzielić się na słowa i wygenerować w oddzielnych bannerach PRZYKŁAD:
```
Podaj zdanie jakie chcesz zamienić w banner:
To jest mój banner

******
* TO *
******
********
* JEST *
********
*******
* MÓJ *
*******
**********
* BANNER *
**********
```
- zauważ, że słowa są pisane jako `uppercase`.
- program powinien po wypisaniu tych banerów — zakończyć elegancko swoje działanie informacją:
```
Kończę działanie, żegnam...
```
