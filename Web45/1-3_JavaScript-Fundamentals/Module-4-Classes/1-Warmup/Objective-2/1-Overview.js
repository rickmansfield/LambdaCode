// Overview
// Now that we have had plenty of practice with pseudo-classical inheritance. We'll take the time to convert our beautiful little Person constructor.

// Some critical notes on classes:

// The object our class returns will have attributes assigned to it from the constructor() function.
// All methods attached to the class body will be stored on the Objects prototype in a special way. There is a bit more magic here than just Object.create(Foo.prototype); and Class.call(this, attrs); But now that we know this, we can accept that the class keyword does this gloriously for us.
// The 'extends' keyword is used to extend a parent object. A clue to finding out if a class is a sub-class is to look for extends.
// Finally, if you're going to use extend, super() needs to be called from within the constructor function. This is to pass any new attributes back up to the constructor of the parent object.

// Examples found below as we refactor our code from the previous objective:

function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};
// =================================
class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }
  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

// Let's review:

// speak is now assigned to the object's prototype. (open the console and show this off after you instantiate an object.)
// this is a single class, meaning it is not extending a parent class. We'll get to extends soon.
// The code is clean now! Instead of having to reference the object's prototype over and over to create methods on it, you can just add them to the class body. This is how we use classes today. You'll get plenty of time to use this when we get to React. React uses classes all the time.
// Classes come in handy when we have children objects that will be sub-classes of their parents. We accomplished this in the previous module with Child (see below).

// All this +++++++++++++++++++++++++++++++++++++++++++
function Child(childAttrs) {
  Person.call(this, childAttrs); // this is the special sauce
  this.isChild = childAttrs.isChild; // this will be a special attribute to Child
}

Child.prototype.checkIfChild = function() {
  if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
  }
};

// With classes, we can rewrite that function like this:
// Becomes this ++++++++++++++++++++++++++++++++++++++++
class Child extends Parent {
  constructor(childAttrs) {
    super(childAttrs);// this is the special sauce
    this.isChild = childAttrs.isChild; // special attribute to Child
  }
  checkIfChild() {
    if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
  }
}
// Now we're going to make fred and pebble into objects and see what they look like! Be ready to be blown away!

const fred = new Person({
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

const pebbles = new Child({
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});
// Follow Along
// For this assignment, we're going to be converting your Fruit constructors so that they can leverage the power of the class keyword.

// Following along here https://codepen.io/lambdaschool/pen/QJdOJa (Links to an external site.) with the recorded video above will help us all understand this stuff a lot more.

// Challenge
// Convert constructor functions into class syntax using class, extends, and super() here https://codepen.io/lambdaschool/pen/pOKxme(Links to an external site.).