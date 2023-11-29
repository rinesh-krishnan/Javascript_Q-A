 //Calculate the sum of numbers in an array of numbers
let array = []
let sum = 0
let num = 3

//To fill random numbers in variable array for iteration
for (let i = 0; i < num; i++) {
	let elment = Math.floor((Math.random()*100))
	array.push(elment);
}
console.log(array);

//To find the sum of numbers in variable array
for (let j = 0; j < num; j++) {
	sum += array[j]
}

console.log(sum);