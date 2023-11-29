//Print the odd numbers less than 100

//Way1
let num = 1
let oddNumbrs = []

while (num<51) {
	oddNumbrs.push(2*num - 1)
	num++
}
console.log(oddNumbrs);


//Way2
let numbers = []
let min = 1 
let max = 100

function oddNumbers(min, max) {
	let minNum = min
	let maxNum = max
	
	while (minNum < maxNum) {
		if (minNum % 2 == 1) {
			numbers.push(minNum)
		}
		minNum++
	}
	return numbers
}
oddNumbers(min, max)
console.log(numbers);