function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
     
   }
   Person.prototype.eat = function (edible){
     if (this.stomach.length <= 10){
       this.stomach.push(edible);
     }
   }
   Person.prototype.poop = function (){
     this.stomach = [];
   }
   Person.prototype.toString = function(){
     return `${this.name}, ${this.age}`;
   }

   const romy = new Person ('Romy', 29);
   console.log(romy);
   console.log(romy.eat('taco'));
   console.log(romy.eat('snickers'));
   console.log(romy.stomach);
   romy.poop();
   console.log(romy.stomach);
   console.log(romy.toString());

//    +++++++++++++++++++++
function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  Car.prototype.fill = function(gallons){
    return `${this.tank} = ${this.tank + (gallons)}`;
  }
  Car.prototype.drive = function(distance){
    return `${this.odometer} = ${distance}, ${this.tank} = ${this.tank -(distance/this.milesPerGallon)}`;
  }