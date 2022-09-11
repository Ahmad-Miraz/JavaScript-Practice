function studentInfo(name,id,dept,batch,occupation){
  this.name=name;
  this.id=id;
  this.dept=dept;
  this.batch=batch;
  this.occupation=occupation;

  this.display=function(){
    console.log(this.name);
    console.log(this.id);
    console.log(this.dept);
    console.log(this.batch);
    console.log(this.occupation);
  }
}

let student1= new studentInfo('Miraj Hossain',18101022,'cse',43,'Software Engineer');

let student2= new studentInfo('Mushfiqur Rahman',18101048,'cse','43','Software Engineer');

let student3= new studentInfo('Shahed Hossain Chowdhury',17201051,'cse',42,'UI/UX Designer');

student1.display();
student2.display(3);
student3.display(5);