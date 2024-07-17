// Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

const product = (a, b = 5) => a * b;

console.log(product(2, 10));
console.log(product(2));
