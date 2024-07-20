// Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const book = {
	title: "The Alchemist",
	author: "Paulo Coelho",
	year: 1988,
	displayInfo() {
		console.log(
			`${this.title} was written by ${this.author} in ${this.year}`
		);
	},
};

console.log(book);
