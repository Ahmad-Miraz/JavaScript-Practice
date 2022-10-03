let number = [1, 3, 5, 7, 9];
let squareNumber = number.map(function(x) {
  console.log(x * x);
});
console.log("This line splits map and filter function");
let number2 = number.filter(function(x) {
  return x < 5;
});
console.log(number2);