// Write a function that takes a person's name, age and returns a greeting message. Provide a default value for the age.

const greet = (name, age = 18) => `Welcome ${name}, you age is ${age}`;

console.log(greet("Hitesh"));
console.log(greet("Archit", 23));
