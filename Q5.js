//Calculate Factorial

let num = 5

let fact = 1
 
function factorial(num) {
	while (num >= 1) {
		fact = fact * num
		num--
	}
	return fact
}
factorial(num)

console.log(fact);