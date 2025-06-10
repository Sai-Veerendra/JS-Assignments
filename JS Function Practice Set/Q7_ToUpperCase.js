// 7. Define a function toUpperCaseWord that takes a string and returns it in uppercase.

function toUpperCaseWord(word){
    return word.toUpperCase();
}

// arrow function
const upperCaseWord = word => word.toUpperCase();

let word = 'sai';
let word1 = 'Veeru';

console.log(`${word} -> ${toUpperCaseWord(word)}`);
console.log(`${word1} -> ${upperCaseWord(word1)}`);