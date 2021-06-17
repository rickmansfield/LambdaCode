// Scope 
// scope answers the question of where are my functions and variables available to me? 

//Global Variables 
// const cohort = 'Web45'; // I can access this anywhere in my program 

// console.log(cohort);

// in the browser the global scope is called the window

// let school = 'Lambda';
// var track = 'web'; // the only thing attached to the window object is var

// // if you have more than 1 dev working on a program global variables aren't a great idea because of naming - you might not know what all variable names are and you might accidently override a variable 

// var track = 'data science'; // this is a problem! 
// let school = 'code academy'; // this will throw an error - that error is good. 
// console.log(school);

/*
var 
- can be redecleared 
- can be updated 
- function scoped 

let 
- cannot be redecleared 
- can be updated 
- block scoped 

const 
- cannot be redecleared 
- cannot be updated 
- block scoped 
*/

// Function Scope 
// when variables are created inside of a function they are only ever available inside of that function unless we explicitly return them 
// const cohort = 'web45';

// we can pass information down but we can't pass it back up 

// function lambda(){
//   var cohort = 'web46';
//   // console.log(cohort);
// }

// lambda();

// console.log(cohort);

// Block Scope 

// if(1 + 1 === 2){
//   var answer = true;
// }
// console.log(answer);

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log(i);

// One more Example 

// var dog = 'Ada';

// function callDog(dog){
//   console.log(dog);
// }

// function puppy(){
//   const dog = 'Noa';
//   callDog('Fido');
// }

// puppy();

//functions are scoped in the same way variables are scoped 
// function sayHi(name){
//   function yell(){
//     console.log(name.toUpperCase());
//   }
//   yell();
// }

// sayHi('Brit');


// yell(); // will yell run? No, it's not defined. Why? because it only exists inside of sayHi();

// Scope answers the question of where are my functions and variables available to me. We are looking at where they were defined not where they were referenced or invoked 
// functions are scoped the same where variables are scoped meaning if a function is created inside of another function, it's only available inside of that function 


// HOISTING 
// hositing in JavaScript allows you to access functions and variables before they've been created. 
// 2 things in JavaScript are hoisted: 
// - function declarations 
// - var 

// working();
// //function declearation
// function working(){
//   console.log('its working!!!');
// }
// working();

// function expression
// working(); // this doesn't work function expressions are not hoisted
// const working = function(){
//   console.log('its working!');
// }
// working();

// arrow function 
// working(); // can't do this - arrow functions are not hoisted!! 
// const working = () => { console.log('its working!!!')}

// console.log(myName); // undefined - I exist, I just don't have a value yet
// var myName = 'Brit';
// console.log(myName); // Brit 

// What this file does 
  // all function invocations 

// How does this file do it 
 // all code here 

//Closures 
// A closure happens when a function reaches into its outer scope to grab a variable that's been defined elsewhere
// they give us the ability to put functions together 
// it's the ability to access functions from a parent level scope even after the parent function has been terminated 
// code that's been identified elsewhere that we can use later 
// we can pass variables down, but we can't pass them back up

// lexical scope === belonging (where was I created)

// Global Scope 

// function country(countryName){ // everything inside of this curly is in the scope of country
//   // countries have their own rules and laws 
//   const lang1 = 'French';
//   const lang2 = 'English';
//   console.log(`${lang1} and ${lang2} are the offical languages of ${countryName}`);
//    debugger; // stops your code here so you can debug it 
//   function province(provName){
//     // provinical governments have their own rules and laws
//     console.log(`${lang1} and ${lang2} are the offical languages of ${countryName}, and ${provName} has the largest population in ${countryName}`);
//     debugger;
//     function city(cityName){
//       // city would have it's own rules and own scope 
//       const food = 'Poutine'; // food is only accessible inside of city - we can pass values down but not back up 
//       console.log(`${lang1} and ${lang2} are the offical languages of ${countryName}, and ${provName} has the largest population in ${countryName}. ${cityName} is not the capital of ${countryName}, but it is the capital of ${provName} and the national food is ${food}`);
//       debugger;
//     }// this closes city
//     city('Toronto')
//   }// this closes province
//   province('Ontario');
// }// this closes country 
// country('Canada');

// What is a Closure? 
// A closure happens when a inner function reaches into it's parent scope to grab a value defined in the parent 

// function game(sport){
//   let score = 0; // speaking score into existance here 
//   return function win(){ // returning win - which is increasing the score by 1
//     score ++; // we are updating score value and increasing it by 1
//     return `Your ${sport} game score is ${score}`;
//   }
// }

// // I can create a game

// // const hockeyGame = game('hockey');

// // console.log(hockeyGame());
// // console.log(hockeyGame());
// // console.log(hockeyGame());

// // const basketBall = game('basket ball');
// // console.log(basketBall());


// console.log(game('tennis'));
// // console.log(game('tennis'));
// // console.log(game('tennis'));
// // console.log(game('tennis'));
// // console.log(game('tennis'));

// const tennis = game('tennis'); // taking the invocation of win - and storing it in a variable called tennis 

// console.log(tennis()); // win();

//Breakout 
// returns a random number between 0 and 5
// function score(){
//   return Math.floor(Math.random() * 5);
// }

//Callbacks and Higher Order Function
// callback function is passed into another function as an argument 
// higher order functions receive other functions as arguments 
// callback is passed in / HOF receives 

//HOF
// const kitchen = function(ing1, ing2, chef){
//   return chef(ing1, ing2);
//   // pastaChef('dough', 'sauce');
// }

// //Callback
// const pastaChef = function(ing1, ing2){
//   return `I took ${ing1} and ${ing2} and I made you a 🍝`;
// }

// const pizzaChef = function(ing1, ing2){
//   return `I took ${ing1} and ${ing2} and I made you a 🍕`;
// }
// console.log(kitchen('dough', 'sauce', pastaChef));
// console.log(kitchen('dough', 'sauce', pizzaChef));


function score(){
  return Math.floor(Math.random() * 6);
}

// create a function called hockeyGame that takes a score as a callback and returns the homescore and awayscore in the form of an object 

function hockeyGame(scoreCB){
  return {
    Home: scoreCB(),
    Away: scoreCB()
  }
}

// console.log(hockeyGame(score));

// create a function called totalGameScore - it should take hoceyGame and score as callbacks and it should return an array with a score for each period as string, `Period #: Away: score - Home: score`

function totalGameScore(scoreCB, gameCB){
  let totalGame = [];
  let homeScore = 0;
  let awayScore = 0;
  for(let i = 0; i < 3; i++){
    const currentScore = gameCB(scoreCB);
    homeScore = homeScore + currentScore.Home
    awayScore = awayScore + currentScore.Away
    totalGame.push(`Period ${i + 1},: Away: ${currentScore.Away} - Home: ${currentScore.Home}`);
  }
  return totalGame;
}

console.log(totalGameScore(score, hockeyGame));