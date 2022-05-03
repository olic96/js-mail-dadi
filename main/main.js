// Chiedi all’utente la sua email, 
const email = prompt("Qual'è la tua email?");
// creo una lista di mail,
const listaEmail = ["@email1", "@email2", "@email3"];
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
let controll = false
let h1 = document.getElementById("h1");
for(let i = 0; i < listaEmail.length; i++){
    if(email === listaEmail[i]){
        controll = true
        
    } 
}
if (controll){
    console.log("Email valida");
    h1.innerHTML = "Email valida";
} else {
    console.log("Email non valida");
    h1.innerHTML = "Email non valida";
}
