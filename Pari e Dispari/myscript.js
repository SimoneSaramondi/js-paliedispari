var pariODispari = prompt("Scegli se vuoi immettere un numero Pari o un numero Dispari");

//Pari o Dispari
var first = pariODispari.slice(0, 1).toUpperCase();
var second = pariODispari.slice(1);
pariODispari = first + second;
console.log(pariODispari.toString());

var numeroUmano = parseInt(prompt("Scegli un numero da 1 a 5"));
while(numeroUmano < 1 || numeroUmano > 5){
    numeroUmano = parseInt(prompt("Hai digitato un numero fuori range. Ridigita"));
}
console.log("Il numero scelto è: " + numeroUmano);

var numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log("Il numero del Computer è: " + numeroComputer);

var somma = numeroComputer + numeroUmano;
console.log("La somma dei numeri è: " + somma);

//Funzione che restituisce se la somma è pari o dispari
function typeNum(numeroSomma){
    if(numeroSomma % 2 == 0 && pariODispari === "Pari"){
        return console.log("La somma dei numeri è Pari e l'uomo ha vinto");
    }else if(numeroSomma % 2 == 0 && pariODispari === "Dispari") {
        return console.log("La somma dei numeri è Pari ma l'uomo ha perso");
    }
    else if(numeroSomma % 2 == 1 && pariODispari === "Pari") {
        return console.log("La somma dei numeri è Dispari ma l'uomo ha perso");
    }
    else if(numeroSomma % 2 == 1 && pariODispari === "Dispari") {
        return console.log("La somma dei numeri è Dispari e l'uomo ha vinto");
    }
}

var risultato = typeNum(somma);