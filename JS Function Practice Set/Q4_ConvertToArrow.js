/*
4. Convert this function to an arrow function:

function square(n) {
  return n * n;
}
*/

const arrowSquare = n => n*n;

let n = 6;
console.log(` Sqaure of ${n} is: ${arrowSquare(n)}`);