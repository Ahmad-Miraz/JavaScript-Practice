function add(arr1,arr2){
  let newArr=[[],[]];
  for(i=0;i<arr1.length;i++){
    for(j=0;j<arr1[i].length;j++){
      newArr[i][j]=arr1[i][j]+arr2[i][j]
    }
  }
  console.log(newArr)
}

let arr1=[
  [10,30],
  [20,30]
]
let arr2=[
  [30,20],
  [20,30]
]

add(arr1,arr2)