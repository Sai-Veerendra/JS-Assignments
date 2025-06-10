// 8. Create a function calculateArea that takes length and width as parameters and returns the area of a rectangle.

function calculateArea(length, width){
    return length * width;
}

// arrow function
const recArea = (length, width) => length * width;

console.log(`Area of rectangle-1 is: ${calculateArea(10, 8)}`);
console.log(`Area of rectangle-2 is: ${recArea(20, 16)}`);