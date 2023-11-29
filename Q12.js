//Create a function that recieves an array of numbers as argument and will return a new array containing only positive numbers.

let arr = [1, 2, 3, -1, 2]
let element = []

function positiveNum(arr) {
	for (let index = 0; index < arr.length; index++) {
		if (arr[index] > 0) {
			element.push(arr[index])
		}
	}
	return element
}
positiveNum(arr)

console.log(element);