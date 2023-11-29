//Print the multiplication table
let num = 7

function multiplication(num) {
	let i = 1;
	while(i<=10){
		console.log(`${num} x ${i}  = ${num*i}`);
		i++
	}
}
multiplication(num);