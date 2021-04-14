var pariODispari = prompt("Scegli se vuoi immettere un numero Pari o un numero Dispari");

var first = pariODispari.slice(0, 1).toUpperCase();
var second = pariODispari.slice(1);
pariODispari = first + second;
console.log(pariODispari);

if(pariODispari != "Pari" || pariODispari != "Dispari"){
    console.log("Hai sbagliato a digitare Pari o Dispari");
}