// 3. Write a function called calculateTotal that takes price and quantity as parameters.
// Use a helper function named multiply that multiplies two numbers.

function multiply(price, quantity){
    return price * quantity;
}

function calculateTotal(price, quantity){
    console.log(`Calculated Total is: ${multiply(price, quantity)}`);
}

// arrow fucntion
const total = (price, quantity) => console.log(`Calculated Total is: ${multiply(price, quantity)}`);

calculateTotal(100, 10);
total(200, 10);