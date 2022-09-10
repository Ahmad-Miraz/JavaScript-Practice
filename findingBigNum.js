const prompt = require("prompt-sync")();
let a=prompt('enter first number: ');
let b= prompt('enter second number: ');
let c= prompt('enter third number: ');

if(a>b && a>c){
  console.log(`${a} is big number among ${b} and ${c}`)
}
else if (b>a && b>c){
    console.log(`${b} is big number among ${a} and ${c}`)
}
else{
    console.log(`${c} is big number among ${b} and ${a}`)
}