const prompt=require('prompt-sync')();

let a= Number(prompt("enter a number: "));
let b= Number(prompt("enter a number: "));
let c= Number(prompt("enter a number: "));

let result=a>b&&a>c?`${a} is bigger`:b>a&&b>c?`${b} is bigger`:`${c} is bigger`;
console.log(result);