const prompt=require('prompt-sync')();

let letter = prompt('enter a letter: ');
letter.toLowerCase()
if(letter=='a'){
  console.log(`${letter} is Vowel`);
}
else if(letter=='e'){
  console.log(`${letter} is Vowel`);
}
else if(letter=='i'){
  console.log(`${letter} is Vowel`);
}
else if(letter=='o'){
  console.log(`${letter} is Vowel`);
}
else if(letter=='u'){
  console.log(`${letter} is Vowel`);
}
else{
  console.log(`${letter} is Consonant`);
}