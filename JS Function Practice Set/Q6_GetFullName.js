//   6. Write a function getFullName that takes two parameters: firstName and lastName, and returns the full name as a single string.
// 📝 Example: getFullName("Ajay", "Sharma") ➝ "Ajay Sharma"

function getFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

// arrow function
const fullName = (firstName, lastName) => firstName + ' ' + lastName;

console.log(`Full name is: ${getFullName('Sai', 'Veerendra')}`);
console.log(`Full name is: ${getFullName('James', 'Gosling')}`);