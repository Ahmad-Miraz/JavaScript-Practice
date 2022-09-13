class Vehicle{
  constructor(name,wheel,window,seats){
    this.name=name;
    this.wheel=wheel;
    this.window=window;
    this.seats=seats;
  }
  run(speed){
    if(speed>0){
      console.log(`this vehicle is running at ${speed} km per hour`);
    }
    else(
      console.log(`this vehicle is standing here!`)
    )
    
  }
  display(){
    console.log(`The name of the vehicle is ${this.name}`);
    console.log(`No of Wheel ${this.wheel}`);
    console.log(`No of Window ${this.window}`);
    console.log(`No of Seats ${this.seats}`);
  }
  
}
class Bus extends Vehicle{
  constructor(name,wheel,window,seats){
    super(name,wheel,window,seats)
  }
}

class Car extends Vehicle{
  constructor(name,wheel,window,seats){
    super(name,wheel,window,seats)
  }
}

class MotorCycle extends Vehicle{
  constructor(name,wheel){
    super(name,wheel)
  }
}

let tanjil=new Bus('Tanjil Paribahan',4,20,48);
let Xcorolla= new Car('Toyota X Corolla',4,4,4);
let suzuki=new MotorCycle('Suzuki Gixxer SF',2);

tanjil.display();
tanjil.run(0);

Xcorolla.display();
Xcorolla.run(100);

suzuki.display();
suzuki.run(135);