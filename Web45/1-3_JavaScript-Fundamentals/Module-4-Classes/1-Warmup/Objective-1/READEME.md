Overview
Classes
With ES6 we gained the ability to use what is known as the class keyword. The class keyword is what we call "syntactic sugar" on top of the object built into JavaScript and the object's prototype system. The class keyword is not a new way of achieving object-oriented inheritance in JavaScript.

You already know how to work with classes because you know all about constructor functions and the Object prototype. Working with constructor functions to achieve object creation in JavaScript is fundamental to understanding how classes work. Remember that classes in JavaScript are just special functions.

There are two types of ways we can work with and define classes (much like functions how there are multiple ways of declaring/defining functions) class expressions & class declarations. The pattern we learn today will be called class declarations.

Let us begin by observing some syntax:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
} *
Here we have declared a Rectangle class. It looks pretty similar to the constructor functions that we're used to; however, this time, we're deliberate about placing it inside of the class. You can think of the constructor function as the foundation of every class. When present, you'll be building your object's properties (these get returned when you call new) inside the constructor's body on the this keyword.

Any properties you bound to your created object can be passed in through the constructor method. In this case, we have height & width as attributes that we'd like to store on our created object. Remember: classes will return us objects.

Now, if I wanted to use this class to create an object, it would look very much the same as constructor functions. All I have to do is declare some variable and assign it to the class by using the new keyword.

Let us declare a new Rectangle and log the result.

const newRect = new Rectangle(400, 800);
console.log(newRect);

Logs out:
​​​​​Rectangle { height: 400, width: 800 }​​​​​
Inheritance w/ Classes
Inheritance is where classes shine. The extends keyword, and super(); function make it trivial to bind our classes together to achieve some simple object inheritance. The extends keyword will abstract away any of the Class.call syntax that we're used to. super() tells a parent's constructor to be concerned with the child's attributes and abstracts away the Object.create(this, Class) syntax that is trickier to understand.

Here's how Object inheritance works with classes:

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
Notice that speak() is a method with some special syntax in this class. This method will not be a method on the object, but it will live on the object's prototype instead, which is nifty when you're worried about memory and such.

If I wanted to create a sub-class from our Animal class, it's effortless.

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}
Isn't that so much nicer? No more .bind(), .call(), .apply() and Object.create() etc. We simply just understand the little nuances and it works.

And using this child class:

const doggy = new Dog('Grizzly');

doggy.speak();

---> 'Grizzly barks.'
This is an example derived directly from the MDN documentation. So once you're done learning from here, you can head over there and check this out.

Follow Along
Now follow along with me as we build out some quick classes.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says, Hello!`);
  }
}
Animal is going to be our base class. All other classes will inherit from Animal. So lets define a couple of different animals:

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} Meows!`);
  }
}
And if we want to use them:

const bowWow = new Dog('Grizzly');
const kitty = new Cat('Fluffertons');

console.log(bowWow);
console.log(kitty);
bowWow.speak();
kitty.speak();
Check it out! If you didn't find this astounding, you will once we convert the constructor functions we've built over to use the class keyword!

Challenge
For this challenge, we want you to build out a few classes based on your ancestral tree. (If you're not sure about any of your family's information go ahead and make up names like "Grandpa" and "Grandma").

Go back a few generations and create a Grandpa or Grandma class. Name either one for your parent's parents.

Create a Parent class named for one of your parents. Parent inherits from Grandpa/Grandma.

Create a Child class (you) who inherits from Parent.

Be sure to log out any methods that you use for this project. Any features (i.e. eye color, hair color) that you'd inherit from your ancestors, be sure to include as attributes and pass them down the class chain. Every class should at least be instantiated with the following attributes. name, birthPlace, eyeColor, hairColor.