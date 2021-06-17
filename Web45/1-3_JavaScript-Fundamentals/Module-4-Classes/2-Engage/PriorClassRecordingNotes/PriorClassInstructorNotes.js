// CLASSES
//classes are not hoisted. Code above it doesn't work in the class
//Strict
//methods are special syntax
//the word "constructor" is visible

// CHILD CLASSES
// extends - it links up the dunder __proto__ tells where it came from 
// extends - tell super what to super to
// extend + super do what Parent.call and Oject.create did in the old way. 

//EXAMPLES
//WITH ARGUMENTS
// class Parent{
//     constructor(name, location, work){ //WITH ARGUMENTS
//         this.name = name;
//         this.location = location;
//         this.work = work;
//     }//methods go here
//     job() {
//         return `${this.name} is a ${this.work}`;
//     }
// }

// const mom = new ParentA('mom', 'USA', 'programmer');
// console.log(momA.job());

//WITH OBJECTS
class Parent{
    constructor(thing){//Initialized as an OBJECT
        this.name = thing.name;
        this.location = thing.location;
        this.work = thing.work;
    }//methods go here
    job() {
        return `${this.name} is a ${this.work}`;
    }
}

class Child extends Parent{
    constructor(attributes){
        super(attributes);
        this.major = attributes.major;
    }
    study(){
        return `${this.name} is studying ${this.major}`;
    }
}
class GrandChild extends Child{
    constructor(attributes){
        super(attributes);
        this.toy = attributes.toy;
    }
    play(){
        return `${this.name} plays with ${this.toy}`;
    }
}

const mom = new Parent({
    name: 'mom',
    location: 'USA',
    work: 'coder',
});

const daughter = new Child({
    name: 'Sara',
    location: 'USA',
    work: 'student',
    major: 'real estate', 
});

const grandBaby = new GrandChild({
    name: 'Jake',
    location: 'baby crib',
    work: 'baby',
    major: 'first words',
    toy: 'Toy Truck',
});

console.log(mom.job());
console.log(daughter.job());
console.log(daughter.study());
console.log(grandBaby.job());
console.log(grandBaby.study());
console.log(grandBaby.play());