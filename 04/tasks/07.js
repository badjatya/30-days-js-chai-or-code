// Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

let n = 5;

for (let i = 1; i <= 5; i++) {
	let str = "";
	for (let j = 1; j <= i; j++) {
		str += "* ";
	}
	console.log(str);
}
