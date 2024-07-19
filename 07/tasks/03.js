// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book = {
	title: "The Alchemist",
	author: "Paulo Co",
	year: 1988,
	getBookInfo: function () {
		return `${this.title} by ${this.author}`;
	},
};

console.log(book.getBookInfo());
