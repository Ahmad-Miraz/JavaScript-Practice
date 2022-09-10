const prompt=require('prompt-sync')();
let letter=prompt("Enter a letter: ");
letter.toLowerCase();

switch(letter){
  case 'a':
    console.log(`${letter} is Vowel`);
    break;
  case 'e':
    console.log(`${letter} is Vowel`);
    break;
  case 'i':
    console.log(`${letter} is Vowel`);
    break;
  case 'o':
    console.log(`${letter} is Vowel`);
    break;
  case 'u':
    console.log(`${letter} is Vowel`);
    break;
  default:
    console.log(`${letter} is Consonant`);
}