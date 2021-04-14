var pariODispari = prompt("Scegli se vuoi immettere un numero Pari o un numero Dispari");

//Pari o Dispari
var first = pariODispari.slice(0, 1).toUpperCase();
var second = pariODispari.slice(1);
pariODispari = first + second;

var numeroUmano;

if(pariODispari === "Pari"){
    console.log("Hai selezionato Pari");
    numeroUmano = parseInt(prompt("Ora scegli che numero Pari vuoi tra 1 e 5"));
    while(numeroUmano % 2 != 0 || numeroUmano < 1 || numeroUmano > 5){
        numeroUmano = parseInt(prompt("Il numero non era Pari o era fuori range rimettilo"));
    }
    console.log("Il tuo numero è: " + numeroUmano);
}else if(pariODispari === "Dispari"){
    console.log("Hai selezionato Dispari");
    numeroUmano = parseInt(prompt("Ora scegli che numero Dispari vuoi tra 1 e 5"));
    while(numeroUmano % 2 == 0 || numeroUmano < 1 || numeroUmano > 5){
        numeroUmano = parseInt(prompt("Il numero non era Dispari o era fuori range rimettilo"));
    }
    console.log("Il tuo numero è: " + numeroUmano);
}

var numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log("Il numero del Computer è: " + numeroComputer);

var somma = numeroComputer + numeroUmano;
console.log("La somma dei numeri è: " + somma);

//Funzione che restituisce se la somma è pari o dispari
function typeNum(numeroSomma){
    if(numeroSomma % 2 == 0){
        return console.log("La somma dei numeri è Pari");
    }else {
        return console.log("La somma dei numeri è Dispari");
    }
}

var risultato = typeNum(somma);