const b=()=> "Hello I'm an Arrow Function";
console.log(b());

const a=[
  {
    id:1,
    name:"Md Miraj Hossain"
  },
  {
    id:2,
    name:"Asif Hossain"
  }
];
const c=()=>{
  return a.filter((x)=> x.id<5).map((y)=>y.name);
}
console.log(c());