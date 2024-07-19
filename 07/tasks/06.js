// Access and log the name of the library and the titles of all the books in the library.

const library = {
	name: "City Library",
	books: [
		{
			title: "The Alchemist",
			author: "Paulo Co",
			year: 1988,
		},
		{
			title: "Don't believe everything you think",
			author: "Joseph Nguyen",
			year: 2021,
		},
	],
};

console.log(library.name);
for (let i = 0; i < library.books.length; i++) {
	console.log(library.books[i].title);
}
