// Write a higher-order function that takes a function and a number, and calls the function that many times.

const iterate = (fun, n) => {
	for (let i = 1; i <= n; i++) {
		fun(i);
	}
};

const fun = (it) => console.log("Hello: ", it);

iterate(fun, 5);
