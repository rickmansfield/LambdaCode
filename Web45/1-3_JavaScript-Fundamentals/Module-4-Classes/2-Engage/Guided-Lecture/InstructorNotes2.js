// Breakout (the old way)
// create a pet constructor with a name location and phrase as attributes and a speak method that returns: name says phrase 
// the create a baby pet that has the ability to speak and play the baby pet should also have a toy. The play method should return name plays with their toy

// The Old way
// function Pet(attributes){
//   this.name = attributes.name;
//   this.location = attributes.location;
//   this.phrase = attributes.phrase;
// }

// Pet.prototype.speak = function(){
//   return `${this.name} says ${this.phrase}`;
// }

// //convert to class syntax 

// class Pet{
//   constructor(attributes){
//     // assign this keyword
//     this.name = attributes.name;
//     this.location = attributes.location;
//     this.phrase = attributes.phrase;
//   }
//   //methods go here and they are a special syntax 
//   speak(){
//     return `${this.name} says ${this.phrase}`;
//   }
// }

// // //Creating a child (the old way)

// function Child(attributes){
//   Pet.call(this, attributes); // this is telling the child to inherit from Pet
//   this.toy = attributes.toy; // special attribute for the child
// }

// // Child.prototype = Object.create(Pet.prototype); // inherit the Pet's methods

// // Child.prototype.play = function(){
// //   return `${this.name} plays with their ${this.toy}`;
// // }

// // convert the child to class syntax 

// class Child extends Pet{
//   constructor(attributes){
//     super(attributes);
//     //any special attributes for the child go here
//     this.toy = attributes.toy;
//   }
//   // any special methods for the child go here
//   play(){
//     return `${this.name} plays with their ${this.toy}`;
//   }
// }

// const ada = new Pet({
//   name: 'Ada',
//   location: 'Toronto',
//   phrase: 'bark bark'
// });

// const noa = new Child({
//   name: 'Noa',
//   location: 'Toronto',
//   phrase: 'wooof wooof',
//   toy: 'squeaky squirrel'
// });

// console.log(ada.speak());
// console.log(noa.speak());
// console.log(noa.play());


//Classes
// Classes are not hoisted - this means that we cannot put any information above a class we have referenced 
// they use strict - it prevents window binding (if we don't give 'this' context we will get back undefined), forces us to write cleaner code with errors if we don't 
//Methods are a special syntax 
// a constructor is visibile 

// Child Classes 
// extends links up the dunder proto - it tells us where we came from
// extends tells super what to super to 
// extends + super do what .call and Object.create did (they inherit methods and attributes from the parent)

// class General{
//   constructor(username, password){
//     this.username = username;
//     this.password = password;
//   }
//   logIn(){
//     return `${this.username} has successfully logged in`;
//   }
// }

// class Admin extends General{
//   constructor(username, password, authToken){
//     super(username, password);
//     this.authToken = authToken;
//   }
//   resetUserPasswords(user){
//     return `${this.username} has successfully reset ${user.username}'s password'`;
//   }
// }

// class SuperAdmin extends Admin{
//   constructor(username, password, authToken, securityLevel){
//     super(username, password, authToken);
//     this.securityLevel = securityLevel;
//   }
//   deleteUser(user){
//     return `${this.username} has successfully deleted ${user.username}`;
//   }
// }

// const jonny = new General('Jonny O', 'superSecretPassword');
// const ryan = new Admin('Ryan Q', 'fluffykittens', 123075);
// const jamaal = new SuperAdmin('Jamaal', 'rainbowunicorn', 897521, 'Top Secret');

// console.log(jonny.logIn());
// console.log(ryan.logIn());
// console.log(jamaal.logIn());

// console.log(ryan.resetUserPasswords(jonny));
// console.log(jamaal.resetUserPasswords(ryan));

// console.log(jamaal.deleteUser(jonny));


// Initalize as Object 
// class General{
//   constructor(thing){
//     this.username = thing.username;
//     this.password = thing.password;
//   }
//   logIn(){
//     return `${this.username} has successfully logged in`;
//   }
// }

// class Admin extends General{
//   constructor(attr){
//     super(attr);
//     this.authToken = attr.authToken;
//   }
//   resetUserPasswords(user){
//     return `${this.username} has successfully reset ${user.username}'s password'`;
//   }
// }

// class SuperAdmin extends Admin{
//   constructor(attr){
//     super(attr);
//     this.securityLevel = attr.securityLevel;
//   }
//     deleteUser(user){
//     return `${this.username} has successfully deleted ${user.username}`;
//   }
// }

// class NotSoSuperAdmin extends Admin{
//   constructor(attr){
//     super(attr);
//     this.status = attr.status;
//   }
//   deleteThread(user){
//     return `${this.username} has succesfully deleted ${user.username}'s thread'`;
//   }
// }

// const jonny = new General({
//   username: 'Jonny O',
//   password: 'superSecretPassword'
// });
// const ryan = new Admin({
//   username: 'Ryan Q',
//   password: 'fluffykittens',
//   authToken: 123075
// });
// const jamaal = new SuperAdmin({
//   username: 'Jamaal', 
//   password: 'rainbowunicorn', 
//   authToken: 897521, 
//   securityLevel: 'Top Secret'
// });
// const sebastian = new NotSoSuperAdmin({
//   username: 'Seb',
//   password: 'puppiesarethecutest',
//   authToken: 097283,
//   status: 'active'
// });

// console.log(jonny.logIn());
// console.log(ryan.logIn());
// console.log(jamaal.logIn());
// console.log(sebastian.logIn());

// console.log(ryan.resetUserPasswords(jonny));
// console.log(jamaal.resetUserPasswords(ryan));
// console.log(sebastian.resetUserPasswords(jamaal));

// console.log(sebastian.deleteThread(jonny));

// console.log(jamaal.deleteUser(jonny));


// Closures 

// when a function reaches into the outer scope to grab a value, that's when a closure happens 
// We can pass values down in scope but not back up

// lexical scope === belonging - where did I come from 


// function sayHi(name){
//    function yell(){
//     console.log('helloo ' + name.toUpperCase()); 
//      debugger;
//   }
//    yell();
//   debugger;
// }

// sayHi('Jason');

// function outer(name){
//   console.log(`I am outside the function ${name}`);
//   debugger;
//   function inner(){
//    console.log(`I am inside the function ${name}`);
//     debugger;
//   }
//   inner();
// }
// outer('Jason');

// Callback + Higher Order Functions 
// callback functions are passed into other functions as arguments 
// Higher Order Function - it receives other function as arguments 


const places = [
  {city: 'Kigali', country: 'Rwanda', region: 'East Africa'},
  {city: 'Amman', country: 'Jordan', region: 'Middle East'},
  {city: 'Najaf', country: 'Iraq', region: 'Middle East'},
  {city: 'Panama', country: 'Panama', region: 'South America'},
  {city: 'Malaga', country: 'Spain', region: 'Europe'},
  {city: 'San Paulo', country: 'Brazil', region: 'South America'},
  {city: 'Abuja', country: 'Nigeria', region: 'West Africa'},
  {city: 'Mumbai', country: 'India', region: 'South Asia'},
  {city: 'Auckland', country: 'New Zealand', region: 'Oceania'},
  {city: 'San Francisco', country: 'USA', region: 'North America'},
  {city: 'Bucharest', country: 'Romania', region: 'Europe'},
];
// greate for previewing data
// places.forEach(function(item){
//   console.log(item.country);
// });

// what is item? 
// places[i];
//============================
//============================
//toUpperCase or toLowerCase
//.map - great for converting data 
// return a new array 
// doesn't manipulate the original 
// what goes after the return statement goes inside the new array 

// I want all of the regions returned in an array in capilized letters
function capitalize(array){
  const newArray = array.map(function(item){
    return item.region.toUpperCase();
  })
  return newArray;
}

console.log(capitalize(places));