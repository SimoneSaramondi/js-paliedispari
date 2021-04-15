var parola = prompt("Inserisci una parola");

document.getElementById("palindroma").innerHTML = "La parola da te inserita è: " + parola + "<br>";

console.log("La parola/frase da te inserita è: " + parola);

// Elimino da una stringa gli spazi
parola = parola.split(" ").join("");
//console.log(parola);
parola = parola.toLowerCase().toString();
//console.log(parola);

function isPalindroma(word){
    var parolaInversa = ""; // inizializzo vuoto
    for(var i = word.length - 1; i >= 0; i--){
        parolaInversa += word[i];
    }
    return word === parolaInversa; // true o false
}

if(isPalindroma(parola)){
    console.log("La parola è Palindroma");
    document.getElementById("palindroma").innerHTML += "La parola da te inserita è Palindroma";
}else{
    console.log("La parola non è Palindroma");
    document.getElementById("palindroma").innerHTML += "La parola da te inserita non è Palindroma";
}