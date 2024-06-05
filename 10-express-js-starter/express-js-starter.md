# Zadanie 10

> Wykonaj serwer w Express.js  
> Powinien on wystawić `API` do korzystania z przygotowanej przez nas wcześniej logiki do obsługiwania gości na przyjęciu (_#Zadanie 8_).   


## Wymagania:
- Na dobry początek zróbmy tylko wyświetlanie listy gości z odpowiednimi statusami - jako `JSON`.
- Endpoint `GET`:
    - `/guests` - pokazuje listę gości.
    - `/guests?status=confirmed` - lista gości z potwierdzonym przybyciem na przycięcie.
  - `/guests?status=uncofirmed` - lista gości niepotwierdzonych.
