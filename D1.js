/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Dato string, caratteri definiti tramite l'utilizzo dei doppi apici */

let color = "red";
let lastName = "Rossi";

/* dato number, indica un valore numerico intero o decimale */

let age = 18;
let weight = 8;

/* booleans ammette due soli valori utili a far prendere decisioni al nostro codice, ovvero true e false*/

let canYouDrinkMilk = true;
let canYouEatMet = false;

/* undefinied  rappresenta un valore ancora inesistente*/

let z;
let Y;

/* null ovvero assenza di valore intenzionale di una variabile svuotata apposta dallo sviluppatore */

let car = null;
let bike = null;

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Marco";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
let number3 = number1 + number2;
console.log("number3", number3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*myName = "cognome";*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("number4", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 == name2 || name2 == name1);

console.log(
  name1.toLocaleLowerCase == name2.toLocaleLowerCase ||
    name2.toLocaleLowerCase == name1.toLocaleLowerCase
);
