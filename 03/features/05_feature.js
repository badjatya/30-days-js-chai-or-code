// Leap Year Check Script: Write a script that checks If a year is a leap year using multiple conditions and logs the result.

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
