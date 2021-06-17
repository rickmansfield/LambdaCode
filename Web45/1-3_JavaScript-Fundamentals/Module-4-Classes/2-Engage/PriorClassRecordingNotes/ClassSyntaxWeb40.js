// old way
// function Pet(attributes){
//     this.name = attributes.name;
//     this.phrase = attributes.phrase;
//     this.location = attributes.location;
// }
// Pet.prototype.speak = function(){
//     return `${this.name} says ${this.phrase}`;
// };

//Converted to ES6 Class syntax using Object notation
class Pet{
    constructor(attributes){
        this.name = attributes.name;
        this.location = attributes.location;
        this.phrase = attributes.phrase;
    }//methods go here
    speak (){
        return `${this.name} says ${this.phrase}`;
    }
}

//converted to class using arguments ??


//Creating a child E011 syntax
// function Child(attributes){
//     Pet.call(this, attributes);
//     //any special attributes for child go here. 
// }
// Child.prototype = Object.create(Pet.prototype);

//Converted to ES6 Class sytax
class Child extends Pet{ //tells child parent is pet
    constructor(attributes){
        super(attributes);
        //any special methods for the child go here
    }
    //any apecial method go here. 
}

//invoke our constructor functions here
const firstPet = new Pet({
    name: 'Buddy',
    location: 'Wisconsin',
    phrase: 'Boe roe roe'
});

const babyPet = new Child({
    name: 'Ella',
    location: 'Wisconsin',
    phrase: 'bark bark bark',
});

console.log(firstPet.speak());
console.log(babyPet.speak());