// Importowanie modułu 'events' do zarządzania zdarzeniami
const EventEmitter = require('events');

// Definiowanie klasy MyEmitter dziedziczącej z EventEmitter
class MyEmitter extends EventEmitter {}

// Tworzenie instancji klasy MyEmitter
const myEmitter = new MyEmitter();

// Eksportowanie instancji myEmitter
module.exports = myEmitter;