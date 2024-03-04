// ACQUISIZIONE E PREPARAZIONE DEI DATI 

//NOME UTENTE
const userName = prompt('Ciao dimmi il tuo nome');
console.log(userName);
//COGNOME UTENTE
const userLastName = prompt('Ciao dimmi il tuo cognome');
console.log(userLastName);
//COLORE PREFERITO UTENTE
const userColour = prompt('Ciao dimmi il tuo colore preferito');
console.log(userColour);
//NUMERO SCELTO DALL' UTENTE
const userNumber = prompt('Ciao dimmi un numero casuale');
console.log(userNumber);

// LOGICA DELLA MIA APPLICAZIONE

// CONVERSIONE PROMPT DA STRINGA A NUMERO
const userNumberAsNumeric = parseInt(userNumber)
// CREAZIONE PASSWORD
const password = userName + userLastName + userColour + (23 + userNumberAsNumeric);
console.log(password);

// OUTPUT ALL'UTENTE
// STAMPA SULLA PAGINA
const userMessage = 'La tua password è ' + password;
console.log(userMessage);
document.getElementById('message').innerHTML = userMessage;