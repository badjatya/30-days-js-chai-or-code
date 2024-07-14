// Write a program that uses the `!` operator to negate a condition and log the result to the console.

const isAuthenticated = (user) => {
	if (!user.token) {
		return "User is not authenticated";
	} else {
		return "User is authenticated";
	}
};

const user = { token: "123" };
console.log(isAuthenticated(user)); // User is authenticated
