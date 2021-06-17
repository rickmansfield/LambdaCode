//Review
//FUNCTIONS================================
//prarmeters are placeholder values- they have no meaning unti lthe function is invoked. 
// arguments are actual values that take the place of the paramenter when  the fucntion is involed, 

// function ===== declaration ==== Example
// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add (2, 4));

// function ===== expretion ==== Example
// const add = function(num1, num2){
//     return num1 + num2;
// }

// function ===== ARROW ==== Example
// const add = (num1, num2) => num1 + num2;
// we do NOT use arrow function inside of object because they don't bind with "this."

const object = {
    key:value, 
    key: function(){
        //return code here
    }
}

//ARRAYS=========================
// an arry of information 
// order matters
// every item gets an index
// working with arrays gives us access to array methods

const array = [0, 1, 2, 3, 4,];

// Calbacks and HOF Higher Order Functions
// HOF's RECIEVE a call back fuctions as an argument
// callback functions are PASSED in to HOF's

//example
// function calc(num1, num2, operator){
//     return operator(num1, num2);
//     //add (2, 4);
// }
// const add = (num1, num2) => num1 + num2;
// calc(2, 4, add);

//=======================================
//ADVANCED ARRAY METHODS (All are HOF's)

//.forEach()
//does not return a new array
// it must iterate through every single item in the array without stopping
// it does not need a return statment. 

array.forEach(function(item){
    //put your code here - console.log or return
});
// arrow function version
array.forEach(item => // retrun something here);

//.map()
//returns a new array
// converts data
// requires return statement
const newArray = array.map(function(item){
    return // thing you want included in new array
});
//arrow function version
//const newArray = array.map(item => thing you want to include in hew array);

//.filter()
//returns new array
// used to filter based on a test if true-included, if false not included
// requires a return statement. 

const newArray = array.filter(function(item){
    return // think you want included if test is "true"
})
const newArray = array.filter(item => // thing you want included if it's true)

//.reduce()
// no new array AUTOMATICALLY
// returns a single value
// used for sums and products / but it could be used for anything
// the inital value is usually 0 if adding | 1 if multiplying
const singleValue = array.reduce(function(accumulator, item)){
    return accumulator + item;
}, initialValue;

const singleValue = array.reduce((accumulator, item) => {
    return accumulator + item;
}, initialValue);

//Closure
//When a function reaches outside of it's scope to grab a value that was defined in parent scope
//passes down but not up
function unitOne(skill1, skill2, skill3){
    console.log(`in unit one students learn ${skill1}, ${skill2},${skill3}`);
    function unitTwo(Skill4, skill5, skill6){
        console.log(`in order for students to understand ${skill4}, ${skill5}, and ${skill6} they first need to master ${skill1}, ${skill2} and ${skill3}`);
    }// this closes unitTwo
    unitTwo(`the DOM', 'API's and promises`, 'React');
}//this closes unitOne

UnitOne('HTML', 'CSS', 'JavaScript Fundamentals');// closuer happens at first need to master${skill1}, ${skill2} and ${skill3} from the console.log of UnitTwo

