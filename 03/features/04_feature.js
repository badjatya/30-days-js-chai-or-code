// Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let score = 85;

switch (true) {
	case score >= 90:
		console.log("A");
		break;
	case score >= 80:
		console.log("B");
		break;
	case score >= 70:
		console.log("C");
		break;
	case score >= 60:
		console.log("D");
		break;
	default:
		console.log("F");
}
