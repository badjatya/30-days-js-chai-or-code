// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let letVariable = "I can be reassigned";
letVariable = "I have been reassigned";

console.log(letVariable);

const constVariable = "I cannot be reassigned";
constVariable = "I have been reassigned"; // This will throw an error
console.log(constVariable);
