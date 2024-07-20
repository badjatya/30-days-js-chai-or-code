// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const product = (a, b = 1) => a * b;

console.log(product(2, 3)); // 6

console.log(product(2)); // 2
