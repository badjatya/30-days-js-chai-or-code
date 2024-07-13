// Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let stringVar = "Hello, world!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "Archit", age: 23 };
let arrayVar = [1, 2, 3, 4, 5];
function functionVar() {
	return "I am a function";
}
let symbolVar = Symbol("uniqueIdentifier");
let bigIntVar = 1234567890123456789012345678901234567890n;

// Log the value and type of each variable
console.log(`stringVar: value = ${stringVar}, type = ${typeof stringVar}`);
console.log(`numberVar: value = ${numberVar}, type = ${typeof numberVar}`);
console.log(`booleanVar: value = ${booleanVar}, type = ${typeof booleanVar}`);
console.log(`nullVar: value = ${nullVar}, type = ${typeof nullVar}`);
console.log(
	`undefinedVar: value = ${undefinedVar}, type = ${typeof undefinedVar}`
);
console.log(
	`objectVar: value = ${JSON.stringify(
		objectVar
	)}, type = ${typeof objectVar}`
);
console.log(`arrayVar: value = ${arrayVar}, type = ${typeof arrayVar}`);
console.log(
	`functionVar: value = ${functionVar}, type = ${typeof functionVar}`
);
console.log(
	`symbolVar: value = ${symbolVar.toString()}, type = ${typeof symbolVar}`
);
console.log(`bigIntVar: value = ${bigIntVar}, type = ${typeof bigIntVar}`);
