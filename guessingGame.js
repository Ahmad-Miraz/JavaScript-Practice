const prompt=require('prompt-sync')();
let b=parseInt(prompt('Enter a Number between 1 to 6: '));
let a=Math.floor(Math.random()*6)+1;

a==b?console.log("Congratulations! You've Won."):console.log(`Sorry! You've lost. \nthe number was ${a} please try again`);
