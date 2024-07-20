// Spread and Rest Operators Script: Write a script that demonstrates the use of the `spread operator` to combine arrays and the `rest operator` to handle multiple function arguments.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

function sum(...combined) {
	return combined.reduce((acc, curr) => acc + curr, 0);
}

console.log(combined);
console.log(sum(...combined));
