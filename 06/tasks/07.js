// Use the map() method to create a new array where each number is doubled and log the new array.

const arr = new Array(7, 2, 5, 9, 11);

const newArr = arr.map((item) => item * 2);

console.log("Original: ", arr);
console.log("New Arr: ", newArr);
