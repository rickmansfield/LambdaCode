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
class ParentA{
    constructor(name, location, work){
        this.name = name;
        this.location = location;
        this.work = work;
    }//methods go here
    job() {
        return `${this.name} is a ${this.work}`;
    }
}

const momA = new ParentA('mom', 'USA', 'programmer');
console.log(momA.job());

class ParentB{
    constructor(thing){
        this.name = name;
        this.location = location;
        this.work = work;
    }//methods go here
    job() {
        return `${this.name} is a ${this.work}`;
    }
}

const momB = new ParentB({
    name: 'mom',
    location: 'USA',
    work: 'coder'
});
console.log(momB.job());
