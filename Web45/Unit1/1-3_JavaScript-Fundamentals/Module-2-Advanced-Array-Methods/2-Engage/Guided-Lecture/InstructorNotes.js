// Callbacks and Higher Order Functions
// Higher Order Functions receive other functions as arguments 
// callback functions are passed into higher order functions as arguments 
// HOF receive / callback functions are passed in 

//HOF
// function calc(num1, num2, operatorCb){
//   return operatorCb(num1, num2);
// }

// // callback functions
// const add = (num1, num2) => num1 + num2;
// const subtract = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num1 / num2;

// // invoke calc 
// console.log(calc(5, 8, multiply));
// console.log(calc(9, 4, subtract));
// console.log(calc(6, 3, add));
// console.log(calc(81, 9, divide));

// data 
// Advanced Array methods!
const cityData = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];
  
  // forEach();
  // must iterate through every single item in an array without stopping
  // forEach doesn't automatically return a new array 
  // return statement is optional 
  cityData.forEach(function(item, index){
    // console.log(item.city);
    // console.log(index);
  });
  
  const upperCaseCity = [];
  
  cityData.forEach(function(item){
    return upperCaseCity.push(item.city.toUpperCase());
  });
  
  console.log(upperCaseCity);