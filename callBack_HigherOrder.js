function callback(){
  console.log(" Im a Computer Science Student");
}
const a=(name,callback)=>{
  return "My name is: "+name+ callback;
}

const b=a("miraj",callback());

console.log(b);