// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numberUser = Math.floor(Math.random() * 6) + 1; 
console.log(numberUser);

const numberCPU = Math.floor(Math.random() * 6) + 1; 
console.log(numberCPU);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// SE l'utente fa il numero più alto della cpu, vince, 
// ALTRIMENTI SE esce lo stesso numero pareggiano,
// ALTRIMENTI perde.

if(numberUser > numberCPU) {
    console.log("Utente vince");
} else if (numberUser === numberCPU) { 
    console.log("Pareggio");
} else {
    console.log("CPU vince");
}