// Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

const user = {
	name: "Archit",
	age: 23,
	country: "India",
	favFruits: ["Apple", "Banana", "Mango"],
};

const { name, age, country, favFruits } = user;
const [fruit1, fruit2, fruit3] = favFruits;

console.log(name, age, country);
console.log(fruit1, fruit2, fruit3);
