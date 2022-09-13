class Student{
  constructor(name,id,dept){
    this.name=name;
    this.id=id;
    this.dept=dept;
  }
  display(){
    console.log(this.name);
    console.log(this.id);
    console.log(this.dept);
  }
}

var student1= new Student('Miraj',18101022,'CSE');
student1.display();