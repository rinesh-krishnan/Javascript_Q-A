//Find the max number in an array of numbers
let num = 5;
let array = [];
let max = 0;

//To fill the variable array with random numbers
for (let i = 0; i < num; i++) {
	let elment = Math.floor((Math.random() * 100))
	array.push(elment);
}
console.log(array);

//To find max number
for (let j = 0; j < num; j++) {
	if(max<=array[j]){
		max = array[j];
	}
}
console.log(max);