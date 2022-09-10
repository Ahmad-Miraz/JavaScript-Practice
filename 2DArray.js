function highestRunScorer(playerInfo){
  let highestScorer=playerInfo[0][0];
  let highestRun= playerInfo[0][1];
  for(let i=1;i<playerInfo.length;i++){
    if(highestRun<playerInfo[i][1]){
      highestRun=playerInfo[i][1];
      highestScorer=playerInfo[i][0];
    }
  }
  return highestScorer,highestRun
  
}



playerInfo=[
  ['Virat',122],
  ['Rizwan',95],
  ['Mendis',87],
  ['Babar',75],
  ['Miraj',190]
];

let MvP=highestRunScorer(playerInfo);
console.log(MvP);