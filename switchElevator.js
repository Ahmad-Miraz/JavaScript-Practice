const prompt=require('prompt-sync')();

let elevator=Number(prompt('The door is opened please Press any key: '));

switch(elevator){
  case 0:
    console.log('This is level G');
    break;
    case 1:
    console.log('This is The First Floor');
    break;
      case 2:
    console.log('This is The Second Floor');
    break;
      case 3:
    console.log('This is The Third Floor');
    break;
      case 4:
    console.log('This is The Fourth Floor');
    break;
      case 5:
    console.log('This is The Fifth Floor');
    break;
      case 6:
    console.log('This is The Sixth Floor');
    break;
      case 7:
    console.log('This is The Seventh Floor');
    break;
      case 8:
    console.log('This is The Eighth Floor');
    break;
      case 9:
    console.log('This is The Ninth Floor');
    break;
  default:
    console.log('This elevator is not goes to this particular Floor You provided, Please provide correct floor');
}