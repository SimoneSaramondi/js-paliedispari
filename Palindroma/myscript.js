var parola = prompt("Inserisci una parola");
parola = parola.toLowerCase();
console.log(parola.toString());

function isPalindroma(word){
    var parolaInversa = ""; // inizializzo vuoto
    for(var i = word.length - 1; i >= 0; i--){
        parolaInversa += word[i];
    }
    return word === parolaInversa; // true o false
}

if(isPalindroma(parola)){
    console.log("La parola è Palindroma");
}else{
    console.log("La parola non è Palindroma");
}
