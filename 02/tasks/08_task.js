// Write a program to compare two numbers using '>' and '<' and log the result to the console

const compare = (a, b) => {
	if (a > b) {
		return `${a} is greater than ${b}`;
	} else if (a < b) {
		return `${a} is less than ${b}`;
	} else {
		return `${a} is equal to ${b}`;
	}
};

console.log(compare(5, 2)); // 5 is greater than 2
