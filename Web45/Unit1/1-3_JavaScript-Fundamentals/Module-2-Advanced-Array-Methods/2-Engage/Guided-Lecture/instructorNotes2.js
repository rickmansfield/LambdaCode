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
// const cityData = [
//   {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
//   {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
//   {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
//   {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
// ];

// forEach();
// must iterate through every single item in an array without stopping
// forEach doesn't automatically return a new array 
// return statement is optional 
// cityData.forEach(function(item, index, array){
//   console.log(item.city);
//   console.log(index);
//   console.log(array);
// });
// // item is required 
// // index and array are optional 

// const upperCaseCity = [];

// cityData.forEach(function(item){
//   return upperCaseCity.push(item.city.toUpperCase());
// });

// console.log(upperCaseCity);

// arrow function syntax

// cityData.forEach(item => upperCaseCity.push(item.city.toUpperCase()));

// console.log(upperCaseCity);

// Skeleton Syntax 
// forEach doesn't return a new array so if we want to push something to a new array we need to create it 
const newArray = [];

// use the forEach method on our original array 
array.forEach(function(item){
  // push our items to the new array 
  return newArray.push(item.key);
  // return is optional but if you are actually wanting to push data to a new array then you are going to want to return here.
});

//.map()
// automatically returns a new array 
// does not manipulate the original array 
// used for converting data 
// needs the return keyword (whatever we return is included in the new array)

// creating a new array called lowercaseStates / map will automatically push whatever is after the return statement to that new array 
// const lowercaseStates = cityData.map(function(item){
//   return item.state.toLowerCase();
// });

// console.log(lowercaseStates);

// arrow function syntax

// const lowercaseStates = cityData.map(item => item.state.toLowerCase());

// console.log(lowercaseStates);
//Skeleton Syntax 
// we know map automatically returns a new array so we can just name our new array and set it equal to our original array.map 

const newArray = array.map(function(item){
  // whatever we return here will be included in newArray 
  return item.key;
});




//.filter()
// automatically returns a new array
// needs a return statement 
// does not manipulate the original array 
// it's looking for a return statement that could either be true or false, if its true the data is included in the new array. If it's false the data is ignored. 

// const cityData = [
//   {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
//   {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
//   {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
//   {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
// ];

// filtering out big cities 
// const bigPops = cityData.filter(function(item){
//   return item.population > 500000;
// });

// console.log(bigPops);
// arrow functions
// const bigPops = cityData.filter(item => item.population > 500000);

// console.log(bigPops);


// // taking the big cities and returning just the city names
// // const bigPopCities = bigPops.map(function(item){
// //   return item.city;
// // });

// // console.log(bigPopCities);

// // arrow function 

// const bigPopCities = bigPops.map(item => item.city);

// console.log(bigPopCities);


const cityData = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

//.reduce()
// returns a single value, not an array 
// doesn't manipulate the original 
// used for sums and products (+ and *)
// can be used for anything 

// accumulator is the running total 
// item - the current value being processed 
// initial value is where we start the equation - if we are adding the intital value is usually 0 / if we are multiplying the initial value is usually 1

// add up all the land areas to get a total land area

// const totalLandArea = cityData.reduce(function(acc, item){
//   console.log(`I am the accumulator ${acc}`);
//   console.log(`I am the current value ${item.land_area}`);
//   return acc + item.land_area;
// },0);

// console.log(`I am the totalLandArea ${totalLandArea}`);

//arrow function 

const totalLandArea = cityData.reduce((acc, item) => {
  return acc + item.land_area;
},0)

console.log(totalLandArea);