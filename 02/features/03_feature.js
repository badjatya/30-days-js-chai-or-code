// Write a script that uses the ternary operator to determine if a number is positive or negative logs the result.

class Ternary {
	constructor(num) {
		this.num = num;
	}

	determine() {
		console.log(this.num > 0 ? "positive" : "negative");
	}
}

const ternary = new Ternary(10);
ternary.determine(); // positive
const ternary2 = new Ternary(-10);
ternary2.determine(); // negative
