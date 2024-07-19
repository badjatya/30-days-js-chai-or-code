// Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

const book = {
	title: "The Alchemist",
	author: "Paulo Co",
	year: 1988,
	getBookInfo: function () {
		return `${this.title} in ${this.year}`;
	},
};

console.log(book.getBookInfo());
