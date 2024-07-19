// Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.

const book = {
	title: "The Alchemist",
	author: "Paulo Co",
	year: 1988,
};

for (const key in book) {
	console.log(`${key}: ${book[key]}`);
}
