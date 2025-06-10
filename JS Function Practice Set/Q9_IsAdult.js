//  9. Write a function isAdult that takes an age as input and returns true if the age is 18 or above, otherwise false.

function isAdult(age){
    return (age >= 18) ? true : false;
}

// arrow function
const reallyAdult = age => (age >= 18) ? true : false;

let age = 17;
let age1 = 22;

console.log(`Is ${age} years old considered as an adult? \nAns: ${(isAdult(age)) ? 'Yes' : 'No'} \n`);
console.log(`Is ${age1} years old considered as an adult? \nAns: ${(reallyAdult(age1)) ? 'Yes' : 'No'} \n`);