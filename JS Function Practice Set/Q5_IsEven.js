// 5. Write a function isEven that takes a number and returns true if it is even, otherwise false.

function isEven(number){
    return (number % 2 === 0) ? true : false;
}

// arrow function
const isItEven = number => (number % 2 === 0) ? true : false;

let num1 = 10;
let num2 = 11;

console.log(`Is ${num1} Even? \nAns: ${(isEven(num1)) ? 'Yes' : 'No'} \n`);
console.log(`Is ${num2} Even? \nAns: ${(isItEven(num2)) ? 'Yes' : 'No'} \n`);
