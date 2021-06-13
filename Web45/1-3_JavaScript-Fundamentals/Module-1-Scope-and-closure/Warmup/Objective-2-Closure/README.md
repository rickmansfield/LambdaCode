Overview
Let's look at the Window/Console in a browser/node environment. Type window to your chrome console. JavaScript is executed in this context, also known as the global scope.

There are two types of scope in javascript, Global Vs. Local and that this is important to understand in terms of a computer program written in JavaScript.

When a function is declared and created, a new scope is also created. Any variables declared within that function's scope will be enclosed in a lexical/private scope that belongs to that function. Also, it is important to remember that functions look outward for context. If some variable isn't defined in a function's scope, the function will look outside the scope chain and search for a variable being referenced in the outer scope. This is what closure is all about.

In it's most simplest of forms this is a closure:

const foo = 'bar';
function returnFoo () {
  return foo;
}
returnFoo();
// -> reaches outside its scope to find foo because it doesn't exist inside of return Foo's scope when foo is referenced.
The function body (code inside returnFoo) has access to the outside scope (code outside of returnFoo) and can access that 'foo' variable.

Let's look at another example:

const lastName = 'Bob';
function greet() {
  const firstName = 'Jim';
  alert(`The name's ${lastName}, ${firstName} ${lastName}`);
}
console.log(lastName);
Not much different than the idea presented above, but the thought remains the same. When 'greet' is called, it has no context in its local scope of finding lastName so, it looks outside its scope to find it and use the lastName that is found there.

Let's take this a step further. In the given examples, we've seen that we have created two environments for our code. The first would be the global environment where lastName and greet exist. The second would be the local environment where the alert function is called. Let's represent those two environments like this:

{ // Global
  lastName String: 'Bob',
  greet Function: { // Local to greet
    firstName String: 'Jim'
  },
  // alert Function: Lives on the global scope, but gets called from with inside greet.
}
Follow Along
Let's work through one of your problems from your Homework together.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};
Challenge
For this challenge you will create your own closure:

Create a function that houses 2 nested functions inside of it
Create a unique variable for each function you created
Test out where you can log the unique variables for each function.
Why can you access variable values in nested functions?