// Example Code: Reference this code for the next Exercise
let school = 'Lambda';
let className = 'Intro to Web Dev'

function nameMySchool(){
  let className = "Web Development Fundamentals"
  console.log(school);
}

nameMySchool();
console.log(className);
// Do not change any code above this line!


// Exercise One: 
// Part One: Create a variable called 'inFunction' and 
//           assign it to the value that will be logged
//           on line 7.
let inFunction = "Lambda";


// Part Two: Create a variable called 'outsideFunction' and
//           assign it to the value that will be logged on  
//           line 11.
let outsideFunction = "intro to Web Dev"; 


// Exercise Two:
// Create a Function called 'multipliesTwoNumbers'. It will take two parameters
// call these parameters 'num1' and 'num2'. Return the two parameters multiplied together.
function multipliesTwoNumbers(num1, num2){
  return num1 * num2;
} 
console.log(multipliesTwoNumbers(3,5)); //tests work
// Exercise Three:
// Create a function called 'sayMyName'. It will take one parameter. Call this
// parameter 'myName'. Return the phrase "Hello, my name is " and the myName parameter.
// eg: if name is 'Dan' it should return the string: 'Hello, my name is Dan'.main.js

function sayMyName(myName){
  return "Hello, my name is " + myName;

}
console.log(sayMyName("Rick"));//tests work