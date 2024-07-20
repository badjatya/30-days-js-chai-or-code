// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

const greet = (name = "User") => `Hello, ${name}!`;

console.log(greet("Archit")); // Hello, Archit!
console.log(greet()); // Hello, User!
