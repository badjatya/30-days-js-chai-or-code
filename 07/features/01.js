// Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

const book = {
	title: "The Alchemist",
	author: "Paulo Co",
	year: 1988,
	getKeys: function () {
		return Object.keys(this);
	},
};

console.log(book);
console.log(book.getKeys());
