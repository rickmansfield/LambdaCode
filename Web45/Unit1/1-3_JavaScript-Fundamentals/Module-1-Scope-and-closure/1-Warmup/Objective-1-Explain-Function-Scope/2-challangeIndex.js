// Exercise Two:
// Create a Function called 'sum'. It will take two parameters
// call these parameters 'num1' and 'num2'. Return the two parameters added together.

function sum(num1, num2){
  return num1+num2;
}
console.log(sum(1,1));

// Exercise Three:
// Create a function called 'sayMyName'. It will take one parameter. Call this
// parameter 'myName'. Return the phrase "Hello, my name is " and the myName parameter.
// eg: if name is 'Dan' it should return the string: 'Hello, my name is Dan'.

let myName = 'Dan';
function sayMyName(myName){
  return `Hello, my name is ${myName}`
}

sayMyName(myName);

