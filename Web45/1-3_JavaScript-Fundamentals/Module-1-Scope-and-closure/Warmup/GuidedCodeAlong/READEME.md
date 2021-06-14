// runs inside the fuction first... result 'data science'

// shadow variable (Bad Practice, legal but not allowed)

// Undefined due to scope constraints. It's a local variable. You could change to Var to change the reachability (scope). 

// Ada because of lexical(static) scoping. i.e. where functions are defined not where they are run. 

// Fido (dog is assigned as a parameter 'Fido' this time)

// No you cannot access yell(); it only exists inside the function sayHi(); it is scoped to that function

// What makes yell() a closure? it accesses variables from outside itself from it's parent function. 
//closure is the grouping of a function and where that function declared.
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
//____________

//Hoisting // Accessing things before they are declared. 
When you execute a piece of JavaScript code, the JavaScript engine creates the global execution context.

The global execution context has two phases: creation and execution.

During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. 

- Variable Declaration Hoisting
- Function Declaration Hoisting
- var is hoisted... but let and const are NOT
- arrow functions are NOT hoisted


Closures:
// Nesting = One function iside another. Code inside of code. Child inside a parent. 
- When a function reaches outside of it's scope into the parent scope to access a variable.
- The ability to access fuctions from a parent level scope in it's child level even after the parent fuction has been 
terminated. 
- provides the ability to put fuctions together. 
- code that's been identified else where that we can use later.
- Lexical === belonging

// NO! variables pass down (parent to child) but not up (child to parent); 