// Write a program to compare two numbers using '==' and '===' and and log the result to the console. and log the result to the console.

const compare = (a, b) => {
	if (a == b) {
		return `${a} is equal to ${b}`;
	} else if (a === b) {
		return `${a} is strictly equal to ${b}`;
	} else {
		return `${a} is not equal to ${b}`;
	}
};
