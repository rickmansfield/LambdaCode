/*
  Objects are used all over in JavaScript.
  The following problems will help you get a better feel for object literals
  
  We want you familiar with the following Object methods:
  .keys(), .values(), .entries(), 
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


*/

/* 
  Problem 1: Giver Info
  return an array of an Objects properties/keys
*/

const student = { 
  name: 'Jonas', 
  age: '12', 
  gender: 'M', 
  role: 'Receiver' 
};

const studentKeys = Object; // finish this.
console.log(Object.keys(student));



/* 
  Problem 2: Giver Info
  using the same object as above.
  return an array of an Objects values
*/

const studentValues = Object; // finish this.
console.log(Object.values(student));

/* 
  Problem 3: Giver Info
  Add a list of charecters to Jonas' object
  The list should be called 'characters' and it should be an array.
  example:
  { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver', characters: ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']}
  next: select that list and iterate over it using `.forEach` simply log the name of each char in the list;
*/

const listOfChars = student.characters; // finish this.
student.listOfChars = ['Lily', 'Mother', 'Father', 'Caleb', 'Asher'];

console.log(student);


for (let i=0; i<student.listOfChars.length; i++){
  console.log(student.listOfChars[i]);
}
// Trying forEach loop... 
// student.listOfChars.forEach(listOfChars[i] => console.log(listOfChars[i]));


// NEXT CHALLENGE add a method called greet to the student object to console.log() "My name is Jonas and I'm a receiver. I'm 12 years old." This should work for any student name, age, and role. There are multiple ways to do this, but ultimately, running student.greet() should produce the sentence above.


// note this answer is correct but will only run in codepen as is. https://codepen.io/peacefulrick/pen/BaWObNO?editors=0011
student.greet = function(){
  return `My name is ${this.name} and I'm a ${this.role}. I'm ${this.age} years old.`;
};


// console.log(student);
console.log(student.greet());