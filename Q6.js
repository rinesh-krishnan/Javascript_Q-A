//Print tables from 1 to 10

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		process.stdout.write(`${i} x ${j}  = ${j*i}` + "\n" )
	}
	console.log("");
}