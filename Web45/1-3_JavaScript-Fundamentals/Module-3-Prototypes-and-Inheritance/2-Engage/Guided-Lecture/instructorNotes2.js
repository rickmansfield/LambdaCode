// 4 Principles of 'this'
// Window Binding - if none of the other rules apply 'this' defaults to the window, the global object in node or undefined in strict mode. - this happens when we don't give the 'this' keyword any context.
// 'use strict'; // this forces us to write cleaner code with more errors if we don't
// dog = 'Ada';

// console.log(dog);

// 'use strict';

// function ghost(){
//   console.log(this.boo);
// }

// const boo = '👻 boooo';

// ghost();

// Implicit Binding
// most common rule - it's found in 80% of use cases
// it applies to objects with methods (functions that belong to an object)
// when the function is invoked, look to the left of the dot, that's what 'this' refers to

// const myGhost = {
//   name: 'Casper',
//   boo: '👻 boooo',
//   ghost: function(){
//     console.log(this.boo);
//   }
// }

// myGhost.ghost(); // we are invoking the function here, if we look to the left of the dot we see 'myGhost', so we are assigning the 'this' keyword to myGhost therefore we get back myGhost's boo


//Create some pets

// const petOne = {
//   // properties / values 
//   name: 'Ada',
//   species: 'Bali dog',
//   pronoun: 'her',
//   favFood: 'salmon',
//   eat: function(){
//     return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
//   }
// }

// const petTwo = {
//   // properties / values 
//   name: 'Egg',
//   species: 'Border Collie',
//   pronoun: 'his',
//   favFood: 'carrots',
//   eat: function(){
//     return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
//   }
// }

// const petThree = {
//   // properties / values 
//   name: 'Frost',
//   species: 'cat',
//   pronoun: 'his',
//   favFood: 'cheese',
//   eat: function(){
//     return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
//   }
// }

// const petFour = {
//   // properties / values 
//   name: 'Lola',
//   species: 'dog',
//   pronoun: 'her',
//   favFood: 'peanut butter',
//   eat: function(){
//     return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
//   }
// }

// const petFive = {
//   // properties / values 
//   name: 'Silver',
//   species: 'Blue Sapphire Chicken',
//   pronoun: 'her',
//   favFood: 'worms',
//   eat: function(){
//     return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
//   }
// }

// console.log(petOne.eat());
// console.log(petTwo.eat());
// console.log(petThree.eat());
// console.log(petFour.eat());
// console.log(petFive.eat());

// Explicit Binding 
// call - immediately invokes the function, we pass in arguments 1 by 1
// apply - immediate invokes the function, we pass in arguments as an array
// bind - does not immediately invoke the function, instead it returns a brand new function that can be invoked later, we pass in the arguments 1 by 1

// call 

// function ghost(){
//   console.log(this.boo);
// }

// const myGhost = {
//   name: 'Casper',
//   boo: '👻 booo'
// }

// const otherGhost = {
//   name: 'Fatso',
//   boo: '😡 booo'
// }

// // invoking the functions here
// ghost.call(myGhost); // invoking the ghost function passing in myGhost as an argument and binding this to myGhost. Therefore this.boo is going to be myGhost's boo.
// ghost.call(otherGhost); // in this case this.boo is going to be the otherGhost's boo

//bind 

// function ghost(){
//   console.log(this.boo);
// }

// const myGhost = {
//   name: 'Casper',
//   boo: '👻 booo'
// }

// const otherGhost = {
//   name: 'Fatso',
//   boo: '😡 booo'
// }

// // make a new function that can be invoked later 

// const friendlyGhost = ghost.bind(myGhost); // creating a new function called friendly ghost and binding myGhost to 'this'
// const angryGhost = ghost.bind(otherGhost); // creating a new function called angryGhost and binding otherGhost to 'this'

// // invoking the functions

// friendlyGhost();
// angryGhost();

// Breakout

// function callOfTheWild(){
//   return `${this.name} says ${this.sound}`;
// }

// const animal = {
//   name: 'Larry',
//   species: 'Llama',
//   sound: 'bahhhhhhhhhh'
// }

// console.log(callOfTheWild.call(animal));

// New Binding 
// using the new keyword constructs a new object and 'this' point to it 
// when a function is invoked as a constructor function 'this' points to the newly created object

// //initalizing with arguments (today's homework)
// function Ghost(saying){
//   this.saying = saying;
// }

// // creating an object (initalizing with an argument)

// const myGhost = new Ghost('Casper the friendly 👻');


// console.log(myGhost.saying);
// console.log(myGhost);

// initalize as an object (this could me on the sprint challenge maybe 🤷🏻‍♀️)
// function Ghost(attr){
//   this.saying = attr.saying;
// }

// // create our object (initalizing as an object)

// const myGhost = new Ghost({
//   saying: 'Casper the friendly 👻'
// });

// console.log(myGhost.saying);
// console.log(myGhost);

// constructor functions and prototypes
// constructor functions construct other objects - that is the whole purpose 
// think of it as a template for an object 
// Capitalized function name
// it has an assignment of the 'this' keyword
// it is likely missing a return statement (no a gaurantee)


// initalizing with an object
function Pet(attributes){
    this.name = attributes.name;
    this.species = attributes.species;
    this.pronoun = attributes.pronoun;
    this.favFood = attributes.favFood;
  }
  
  Pet.prototype.eat = function(){
     return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
  }
  
  // let's give the pet a child 
  function BabyPet(attributes){
    Pet.call(this, attributes); // telling the baby pet to inherit all of the pets attributes
    this.toy = attributes.toy; // this is a special attribute for the child 
  }
  
  BabyPet.prototype = Object.create(Pet.prototype); // this says inherit the pet's methods, so now the babyPet also gets to eat 
  
  // initalizing with an object
  const petOne = new Pet({
    name: 'Ada',
    species: 'Bali dog',
    pronoun: 'her',
    favFood: 'salmon',
  });
  
  const petTwo = new Pet({
    name: 'Egg',
    species: 'Border Collie',
    pronoun: 'his',
    favFood: 'carrots',
  });
  
  const petThree = new Pet({
     name: 'Frost',
    species: 'cat',
    pronoun: 'his',
    favFood: 'cheese',
  });
  
  const petFour = new Pet({
    name: 'Lola',
    species: 'dog',
    pronoun: 'her',
    favFood: 'peanut butter',
  });
  
  const petFive = new Pet({
    name: 'Silver',
    species: 'Blue Sapphire Chicken',
    pronoun: 'her',
    favFood: 'worms',
  });
  
  
  // console.log(petOne);
  // console.log(petOne.eat());
  // console.log(petTwo.eat());
  // console.log(petThree.eat());
  // console.log(petFour.eat());
  // console.log(petFive.eat());
  
  // initalizing with arguments 
  // function Pet(name, species, pronoun, favFood){
  //   this.name = name;
  //   this.species = species;
  //   this.pronoun = pronoun;
  //   this.favFood = favFood;
  // }
  
  // Pet.prototype.eat = function(){
  //   return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
  // }
  
  // //creating my new object with arguments 
  // const petOne = new Pet('Ada', 'Bali dog', 'her', 'salmon');
  
  // console.log(petOne.eat());
  // console.log(petOne);