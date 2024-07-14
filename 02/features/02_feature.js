// Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

class Comparison {
	constructor(numOne, numTwo) {
		this.numOne = numOne;
		this.numTwo = numTwo;
	}

	compare() {
		console.log(this.numOne === this.numTwo);
		console.log(this.numOne !== this.numTwo);
		console.log(this.numOne > this.numTwo);
		console.log(this.numOne < this.numTwo);
		console.log(this.numOne >= this.numTwo);
		console.log(this.numOne <= this.numTwo);
		console.log(this.numOne === this.numTwo && this.numOne > this.numTwo);
		console.log(this.numOne === this.numTwo || this.numOne > this.numTwo);
	}
}

const comparison = new Comparison(10, 5);
comparison.compare(); // false, true, true, false, true, false, false, true
