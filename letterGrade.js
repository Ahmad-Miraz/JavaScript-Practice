const prompt= require('prompt-sync')();

let result=Number(prompt("Enter Your Result: "));

if(result>= 80 && result<=100){
  console.log("You Got A+");
}
else if(result<80 && result>=70){
  console.log("You Got A");
}
else if(result<70 && result>=60){
  console.log("You Got A-");
}
else if(result<60 && result>=50){
  console.log("You Got B");
}
else if(result<50 && result>=40){
  console.log("You Got C");
}
else if(result<40 && result>=33){
  console.log("You Got D");
}
else{
  console.log("You've Failed");
}