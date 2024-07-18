// Use the filter() method to create a new array with only even numbers and log the new array.

const arr = new Array(7, 2, 5, 9, 12, 11);

const newArr = arr.filter((item) => item % 2 === 0);

console.log("Original: ", arr);
console.log("New Arr: ", newArr);
