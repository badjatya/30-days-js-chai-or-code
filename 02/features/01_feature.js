// Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

class Arithmetic {
	constructor(numOne, numTwo) {
		this.numOne = numOne;
		this.numTwo = numTwo;
	}

	add() {
		return this.numOne + this.numTwo;
	}

	subtract() {
		return this.numOne - this.numTwo;
	}

	multiply() {
		return this.numOne * this.numTwo;
	}

	division() {
		return this.numOne / this.numTwo;
	}

	remainder() {
		return this.numOne & this.numTwo;
	}
}

const arithmetic = new Arithmetic(10, 5);
console.log(arithmetic.add()); // 15
console.log(arithmetic.subtract()); // 5
console.log(arithmetic.multiply()); // 50
console.log(arithmetic.division()); // 2
console.log(arithmetic.remainder()); // 0
