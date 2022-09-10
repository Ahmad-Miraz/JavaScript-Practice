function highScore(a){
  let max=a[0];
  for(let i=1;i<=a.length;i++){
  if(max<a[i]){
    max=a[i];
  }
}
  return max
}

let a=[70,85,66,9];
console.log(highScore(a));