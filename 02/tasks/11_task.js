// Write a program that uses the `&&` operator to combine two conditions and log the result to the console.

const isAdmin = (user) => {
	if (user.token && user.role === "admin") {
		return "User is admin";
	} else if (!user.token) {
		return "User is not authenticated";
	} else {
		return "User is not admin";
	}
};

const user = {
	token: "123",
	role: "admin",
};
console.log(isAdmin(user)); // User is admin
