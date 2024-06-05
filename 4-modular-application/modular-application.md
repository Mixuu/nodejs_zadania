# Zadanie 4

_Ach, Gdyby..._  
... Twoje rozwiązanie już na etapie [#zadania 3](../3-read-user-input/read-user-input.md) było "umodułowione", to teraz wystarczyłoby zrobić **`copy-paste` development** żeby osiągnąć większość potwórzonych wymagań z zadaia poniżej.

---

> Powtórz początkowe operacje z poprzednich zadań - wygeneruj nowy projekt. Jednak teraz...  
> Chcemy aby nasz program był podzielony na logiczne części oraz działał w _"nieskończoność"_  
> ...tak naprawdę to do momentu, aż _EndUser_ nie zdecyduje o wyjściu
> 
## Wymagania:
- po wpisaniu komendy `npm run banner` program powinien się uruchomić
- program POWINIEN być napisany w kilku plikach/modułach (nie tylko w jednym), separując logikę sposobu działania od wyświetlania akcji dla _EndUser_.
- Program powinien działać tak jak do tej pory — to znaczy:
```
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************

Podaj zdanie jakie chcesz zamienić w banner:
Witaj w moim świecie

*********
* WITAJ *
*********
*****
* W *
*****
********
* MOIM *
********
***********
* ŚWIECIE *
***********
```
- jednak na końcu powinien napisać:
```
Co robimy dalej - wpisz odpowiednią literę:
[k]oniec
[n]astępny banner
_
```
- Happy Path:
    - po wpisaniu przez _EndUser_ litery `k` lub `n` i zatwierdzeniu `[enter]` podejmujemy akcję:
    - `k` - koniec działania programu i infromacja
    ```
    Kończę działanie, żegnam...
    ```                        
    - `n` - spowoduje "zapętlenie" programu i ponownie wyświetli komunikat i opcje:
    ```
    Podaj zdanie jakie chcesz zamienić w banner:
  
    (...)
    ```
- Sad Path:
    - po wybraniu innej "nieznanej" litery, powinna pojawić się infromacja - na przykład: 
    ```
    Co robimy dalej - wpisz odpowiednią literę:
    [k]oniec
    [n]astępny banner 
    o
    
    Nieobsługiwany wybór "o"!       
    ----
    Co robimy dalej - wpisz odpowiednią literę:
    [k]oniec
    [n]astępny banner 
    ```
