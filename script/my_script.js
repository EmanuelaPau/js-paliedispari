// PALINDROMA 

// Faccio un prompt e chiedo una parola all'utente. 
// Verifico la lunghezza della stringa 
// faccio un contatore il cui massimo e' la lunghezza della stringa
// creo una nuova stringa con usando il contatore al contrario?? forse posso fare un array?
// verifico se la prima stringa e' uguale alla seconda

// let userWord = prompt("tell me a word!");
// console.log(userWord)

// /**
//  * Function that tells you if the string is palindrome
//  * @param yourString The user word
//  */

// function isStringPalindrome(yourString) {
//     let reverseString = "";

//     // yourString = "ciccio"
//     for (let i = yourString.length - 1; i >= 0; i--) {
//         reverseString = reverseString + yourString[i];
//     }

//     console.log(reverseString);

//     if (yourString === reverseString) {
//         return true;
//     } return false;
// }


// if (isStringPalindrome(userWord)) {
//     console.log(`${userWord} è palindroma`);
// } else {
//     console.log(`${userWord} non è palindroma`);
// }

// Pari e Dispari
// Faccio un prompt dove chiedo un numero pari o dispari 
// genero un numero random pari o dispari (con una funzione) 
// faccio una funzione isNumberEven?
// creo soluzione con console log e if else

const userNumber = prompt('Pari o Dispari?');
console.log(userNumber);
let userNumberMin = userNumber.toLowerCase()

/**
 * A function that return a random number from a minimum number to a maximum number
 * @param minNumber the minimum number i want to get
 * @param maxNumber the maximum number i want to get
 * @returns 
 */

function randomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * maxNumber + minNumber)
}
console.log(randomNumber(1, 5))

/**
 * A function that tells if even or odd wins
 * @param myBet what the player betted (odd or even) 
 * @param theNumberGiven the number that tells if odd or even win 
 */

function isOddEvenBetWon(myBet, theNumberGiven) {
    if (myBet === 'pari' & (theNumberGiven % 2 == 0)) {
        return true;
    } else if (myBet === 'dispari' & (theNumberGiven % 2 == 1)) {
        return true;
    } return false;

}