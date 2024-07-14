// Write a program that uses the `||` operator to combine two conditions and log the result to the console.

const isValidAge = (age) => {
	if (age >= 18 || age <= 65) {
		return "Valid age";
	} else {
		return "Invalid age";
	}
};

const age = 20;
console.log(isValidAge(age)); // Valid age
