const prompt = require('prompt-sync')();
let a = Number(prompt("Enter First Number: "));
let b= Number(prompt("Enter Second Number: "));


function add(a,b){
  console.log(`The addition of ${a}+${b} = `,a+b)
}
function subtraction(a,b){
  console.log(`The subtraction of ${a}-${b} = `,a-b);
}
function multiplication(a,b){
  console.log(`The multiplication of ${a}*${b} = `,a*b);
}
function division(a,b){
  console.log(`The division of ${a}/${b} = `,a/b);
}

add(a,b);
subtraction(a,b);
multiplication(a,b);
division(a,b);

