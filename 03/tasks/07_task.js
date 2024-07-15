// White a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 2020;

if (year % 4 === 0) {
	if (year % 100 !== 0) {
		console.log("Leap year");
	} else if (year % 400 === 0) {
		console.log("Leap year");
	} else {
		console.log("Not a leap year");
	}
} else {
	console.log("Not a leap year");
}
