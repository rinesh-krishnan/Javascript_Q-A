//Create a function that will convert cesius to fahrenheit
let C = 35
let F

function celToFa(C) {
	F = (9 / 5) * C + 32
	return F
}
celToFa(C);

console.log(`${F} deg Fahrenheit`);