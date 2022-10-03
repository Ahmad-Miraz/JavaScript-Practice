console.log("Hello World");
const initialValue = 0;
const sum=(...args)=>{
  // const arg=[x,y,z];
  return args.reduce((previousValue,currentValue)=>previousValue+currentValue,initialValue)
}
let a=sum(1,2,3,4,5,6)
console.log(a);