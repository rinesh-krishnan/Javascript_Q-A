//Calculate the sum of numbers from 1 to 10

//Way-1
let min = 1;
let max = 10;

let sum = 0

function addition(min, max) {
	while (min <= max) {
		sum += min
		min++ 
	}
}
addition(min, max)
console.log(sum);