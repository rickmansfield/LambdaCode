Objective 1 - explain function scope

Overview
Scope
Remember our cookie analogy from our original discussion on Arrays? If not, recall that you have a robot baking cookies for you with the function bakeCookies()! Things are going great. Fresh cookies every day - until suddenly, your robot starts burning the lemon crisps! Come on, robot. To fix this, you decide to add a parameter temperature, such that you can specify how your robot should be baking cookies. So now, bakeCookies(chocolateChip, 400) and bakeCookies(lemonCrisps, 350) are valid. Later on, you go to print a recipe (for a cookie-baking robot friend) with console.log(temperature), but it comes back as undefined! what? isn't it clearly defined in the function? You've just run into your first scoping issue.

Scope is defined as which variables we currently have access to and where. So far in this course, we have mostly been working in global scope, in that we can access any variable we have created, anywhere in our code. There are a couple different levels of scope: block level scope is used in if statements and for loops. In block level scope, a variable declared using either let or const is only available within the statement or loop (like i in a for loop). Similarly, there is function scope, where temperature exists inside the function, but not elsewhere in your code file.

Function Level Scope
Function scope allows us to create variables inside of functions, that are essentially private to that function. We can not reach into a function from the outside and get access to these variables. But we are free to use these variables anywhere within our function. Conversely, we do have access to variables outside of the function. It is a one-way street. Functions can reach out and grab variables outside of their scope, but we can not reach into a function to get a variable.

const var1 = 'Lambda'

function myFunc(){
  const var2 = 'School';
  console.log(var1); // Lambda
  console.log(var2); // School
  }

console.log(var1); // Lambda
console.log(var2); // undefined
Because var2 is defined inside the function, it can't be accessed later on. var1, however, is global, and can be accessed anywhere.


Check For Understanding: Edit the code above such that var2 has global scope (and can be accessed outside of the function).

Hoisting
Typically when we use variables we declare and initialize them in the same line. That looks something like this:

// declare & initialize variable
var myVariable = "this is a variable";
According to the rules of JavaScript though, we don't actually have to do it this way. For example, the below is also perfectly acceptable and more closely mirrors what JavaScript is doing under the hood. When you run JavaScript, the compiler will declare all variables before initializing them and before running the rest of the script. First the compiler will declare all functions, then the variables. This is one of the quirky things about JavaScript as a language.

// declare variable
var myVariable;
// initialize variable
myVariable = "this is a variable";
Given what you now know, consider the example below. What would you expect the output to be? Null? undefined? this is a variable?

// use variable
console.log(myVariable);
// declare and initialize variable
var myVariable = 'this is a variable';
The answer is undefined. This is because of how the compiler runs. It first declares the variable with a value of undefined, then runs the script, including the initialization of the variables with the values we give them. The compiler would take the code above and interpret is as this:

var myVariable;
console.log(myVariable);
myVariable = "this is a variable";
Let's consider another example. What would you expect the output here to be?

sayHello();

function sayHello(){
  console.log("hello");
}
If you guessed "hello", you'd be correct. After declaring all of the variables and functions, your compiler will also initialize functions. This means that functions can be used before they are declared or initialized. Quick note that this only applies to declared functions, not function expressions.

All of that encompasses the idea of hoisting, Hoisting is the ability to call functions and variables before they are declared, like we see above. It is usually preferable to declare your function before you call it, but because of hoisting, you won't get an error either way. The only time you'd want to break that rule is if you wanted to invoke all the functions at the top of a file so that another developer looking at your file could see at the top what that file does

We've mentioned some minor differences between variable declaration types in the past. Those are explained by hoisting. Declarations with var and the function keyword are hoisted and can therefore be used anywhere in a script. These will return undefined if not yet initialized. Variables declared with let and const are not hoisted and thus can not be used anywhere without throwing a ReferenceError. Basically, you can't use let variables or const variables before you've given them a value. That difference is illustrated here:

console.log('1a', myName1); // undefined
if (1) {
 console.log('1b' myName1); // undefined
 var myName1 = 'Sunil';
}
console.log('2a', myName2); // error: myName2 is not defined
if (1) {
    console.log('2b', myName2); // undefined
    let myName2 = 'Sunil';
}
console.log('3a', myName3); // error: myName3 is not defined
if (1) {
    console.log('3b', myName3); // undefined
    const myName3 = 'Sunil';
}
Hoisting is a really tricky part of JavaScript development, and shouldn't come up too often. That said, if you ever find yourself getting weird reference errors and can't figure out why, consider hoisting as the culprit.

Follow Along
Last time we saw our flip function it logged a result of any number of coin flips. Our challenge now is to include a summative number that calculates the proportion of heads/total flips. So, if flip returns heads 4 times and tails 6 times, our function should not only return a list of 4 heads and 6 tails, it should also return 0.4.


In order to perform this calculation we'll utilize a common programing trick and create a counter called countHeads, this counter will be declared with var and we will add 1 to it every time the flip lands on heads (or 1).

To make this counter functional we have to rely on scope. It will be important that we declare the variable outside the loop but inside the function.

This way the variable can be referenced and changed inside of the for loop, but will reset to 0 every time the function is run.


To further demonstrate the importance of scope here let's lets consider a few non-examples, where countHeads is out of scope. To be completely clear, the examples below are wrong, incorrect programming, but are used to illustrate the importance of scope.

Non-Example 1
When countHeads is outside of the function, our program would work perfectly fine the first time we called flip(x), but would not reset if we called it again. Make this change in the repl.it above and see if you get the same errors as outlined below.

var countHeads = 0 // won't reset when function is called

function flip(repeat){
for (let i = 0; i < repeat; i++){
  var coinFlip = Math.round(Math.random());
  if (coinFlip === 1){
    countHeads = countHeads + 1
    console.log("Heads");
  } else{
    console.log("Tails");
  }
}
return(countHeads/repeat)
}

flip(10); // <- will return a % under 100 (the correct %)
flip(10); // <- will return a % close to or over 100 (accumulates heads)
flip(10); // <- will return an even higher % (continues to accumulate heads)
Non-Example 2
Similarly, if countHeads was within the for loop it would be declared at 0 every time the loop ran. So countHeads would only ever equal 1 or 0 depending on the result of the flip.

Even more problematic, our return statement would throw an error because countHeads only exists within the for loop. In other words, it is out of scope at the return statement because we are referencing a variable that does not exist at that location.

Again, make these changes changes in the repl.it above to see the errors happen in real time.

function flip(repeat) {
    for (let i = 0; i < repeat; i++) {
        var countHeads = 0 // will reset every time the loop starts over
        var coinFlip = Math.round(Math.random());
        if (coinFlip === 1) {
            countHeads = countHeads + 1
            console.log("Heads");
        } else {
            console.log("Tails");
        }
    }
    return (countHeads / repeat); // will cause an error because countHeads is out of scope
    }

flip(10); // <- will cause an error
Challenge
Check your knowledge with the function scope challenge (Links to an external site.).https://codepen.io/lambdaschool/pen/gOpOjbp?editors=0012