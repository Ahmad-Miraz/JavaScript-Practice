class Circle{
  constructor(radius){
    this.radius=radius;
  }
  getArea(){
    console.log("Circle = "+Math.PI*this.radius**2)
}
}

class Rectangle{
  constructor(height,width){
    this.height=height;
    this.width=width;
  }
  getArea(){
    console.log("Rectangle = "+this.height*this.width);
  }
}

class Triangle{
  constructor(base,height){
    this.base=base;
    this.height=height;
  }
  getArea(){
    console.log("Triangle = "+(this.base*this.height)/2);
  }
}
let shapes=[new Circle(10),new Rectangle(10,10),new Triangle(10,10),new Rectangle(5,5),new Circle(5),new Triangle(5,5)];

for(let i=0;i<shapes.length;i++){
  shapes[i].getArea()
}