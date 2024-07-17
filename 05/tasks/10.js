// Write a higher-order function that takes two function and a value, applies the function to the value, and then applies the second function to the result.

function compose(f, g, x) {
	return g(f(x));
}

function f(num) {
	return num * num;
}

function g(num) {
	return num + 1;
}

console.log(compose(f, g, 5)); // 26
