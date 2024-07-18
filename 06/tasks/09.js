// Use the reduce() method to calculate the sum of all numbers in the array and log the result.

const arr = new Array(7, 2, 5, 9, 12, 11);

const sum = arr.reduce((prev, curr) => prev + curr, 0);

console.log("Original: ", arr);
console.log("Sum: ", sum);
