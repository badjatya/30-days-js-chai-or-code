// Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

const key = "title";
const value = "The Alchemist";

const book = {
	[key]: value,
	displayInfo() {
		console.log(this[key]);
	},
};

console.log(book);
book.displayInfo();
