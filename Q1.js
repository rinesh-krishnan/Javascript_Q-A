//Print the numbers from one to te

//Way-1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log(" ");

//Way-2
let printNum = 1;
while (printNum <= 10) {
  console.log(printNum);
  printNum++;
}
console.log(" ");

//way-3(Recurssion)
function printNumber(start, end) {
  if (start <= end) {
    console.log(start);
    return printNumber(start + 1, end);
  }
}
printNumber(1, 10);
