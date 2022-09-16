class Human{
  constructor(name,gender){
    this.name=name;
    this.gender=gender;
  }
}

class Man extends Human{
  #age = 25; // use # to make a parameter private
  constructor(name,gender){
    super(name,gender)
  }
  getAge(){
    console.log(`Name = ${this.name} \nGender = ${this.gender} \nAge is = ${this.#age}`)
  }
}

class Women extends Human{
  #age=21;
  constructor(name,gender){
    super(name,gender)
  }
  getAge(){
    console.log(`Name = ${this.name} \nGender = ${this.gender} \nAge is = ${this.#age}`)
  }
 }

let miraj= new Man("Miraj Hossain","Male");
let razia= new Women("Razia Sultana","Female");


miraj.name="Md Miraj Hossain"; //This will change because it public
//miraj.#age=35; this won't change and will get error because it private 
console.log(miraj);
miraj.getAge()

razia.name="Razia Sultana Ria";
console.log(razia)
razia.getAge()

// console.log(miraj.name);
// console.log(miraj.#age);
