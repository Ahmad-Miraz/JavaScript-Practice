const b=()=>{
  const asynchronous=setTimeout(()=>{
    console.log("Hi I'm asynchronous Function");
  },2000);
}
const a=()=>{
  console.log("Hi I'm synchronous Function")
}
b();
a();