// Write a program to find the largest of three numbers using nested if-else statements.

const num1 = 10;
const num2 = 20;
const num3 = 30;

if (num1 >= num2) {
	if (num1 >= num3) {
		console.log(`${num1} is the largest number`);
	} else {
		console.log(`${num3} is the largest number`);
	}
} else {
	if (num2 >= num3) {
		console.log(`${num2} is the largest number`);
	} else {
		console.log(`${num3} is the largest number`);
	}
}
