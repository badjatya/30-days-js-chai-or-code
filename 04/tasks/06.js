// Write a program to calculate the factorial of a number using a do...while loop.

let n = 5;
let fact = 1;

do {
	fact *= n;
	n--;
} while (n > 1);

console.log(fact);
