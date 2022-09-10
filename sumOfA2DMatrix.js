function add(){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum =sum+ arr[i][0]+arr[i][1]
  }
  console.log(sum);
}


let arr=[
  [10,20],
  [20,10],
  [20,20]
]
add(arr)