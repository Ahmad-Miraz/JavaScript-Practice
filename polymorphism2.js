class Dog{
  constructor(name){
    this.name=name;
  }
  roar(){
    console.log(`${this.name} = Woof!`)
  }
}
class Cat{
  constructor(name){
    this.name=name;
  }
  roar(){
    console.log(`${this.name} = meoow!`)
  }
}
class Duck{
  constructor(name){
    this.name=name;
  }
  roar(){
    console.log(`${this.name} = quack quack!`)
  }
}

let animal=[new Dog("Duck"),new Cat("Cat"),new Duck("Duck")];

for(let i=0;i<animal.length;i++){
  animal[i].roar();
}