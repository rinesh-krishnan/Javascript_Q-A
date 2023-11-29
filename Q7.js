//Calculate the sum of even numbers greater than 10 and less than 30

let min = 10
let max = 30
let numbers = []

let sum = 0

function sumOfEven(min,max) {
for (let i = min; i <= max; i++) {
	if (min%2==0) {
		sum += min
		numbers.push(min);
	}
	min++
}
}
sumOfEven(min,max)

console.log(numbers)
console.log(sum);