// Object Iteration Script: Write a script that demonstrates iterating over an object's properties using `for...in` loop and `Object.keys`/`Object.values`.

const book = {
	title: "The Alchemist",
	author: "Paulo Co",
	year: 1988,
};

console.log("Using for...in loop:");
for (const key in book) {
	console.log(`${key}: ${book[key]}`);
}

console.log("Using Object.keys:");
const keys = Object.keys(book);
keys.forEach((key) => {
	console.log(`${key}: ${book[key]}`);
});

console.log("Using Object.values:");
const values = Object.values(book);
values.forEach((value) => {
	console.log(value);
});
