// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const book = {
	title: "The Alchemist",
	author: "Paulo Co",
	year: 1988,
	updateYear: function (year) {
		this.year = year;
	},
};

console.log("Before: ", book.year);
book.updateYear(2021);
console.log("After: ", book.year);
