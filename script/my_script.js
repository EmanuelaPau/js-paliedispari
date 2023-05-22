// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PALINDROMA 

// Faccio un prompt e chiedo una parola all'utente. 
// Verifico la lunghezza della stringa 
// faccio un contatore il cui massimo e' la lunghezza della stringa
// creo una nuova stringa con usando il contatore al contrario?? forse posso fare un array?
// verifico se la prima stringa e' uguale alla seconda

let userWord = prompt("tell me a word!");
console.log(userWord)

/**
 * Function that tells you if the string is palindrome
 * @param yourString The user word
 */

function isStringPalindrome(yourString) {
    let reverseString = "";

    // yourString = "ciccio"
    for (let i = yourString.length - 1; i >= 0; i--) {
        reverseString = reverseString + yourString[i];
    }

    console.log(reverseString);

    if (yourString === reverseString) {
        return true;
    } return false;
}


if (isStringPalindrome(userWord)) {
    console.log(`${userWord} è palindroma`);
} else {
    console.log(`${userWord} non è palindroma`);
}