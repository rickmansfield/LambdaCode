# Objective 2

- explain what components are and how they work in React

## Contents

- [Objective 2](#objective-2)
  - [Contents](#contents)
  - [Overview](#overview)
    - [**Anatomy of a React Component**](#anatomy-of-a-react-component)
  - [Hi Lambda](#hi-lambda)
    - [A brief demonstration of React's power](#a-brief-demonstration-of-reacts-power)
    - [Imperative Programming vs Declarative Programming](#imperative-programming-vs-declarative-programming)
  - [Follow Along](#follow-along)
  - [Challenge](#challenge)
  
## Overview

### **Anatomy of a React Component**

the code

```JSX
import React from 'react';

const Intro = () => {
  return (
    <div>
      <h2>Hi Lambda!</h2>
    </div>
  );
};
```

how it renders
import React from 'react';

const Intro = () => {
  return (
    <div>
      <h2>Hi Lambda!</h2>
    </div>
  );
};

This is an example of a React "component." A "component" is a pretty loose term to describe a discrete chunk of your site. A header could be a component, for example. Or a footer. Or a hero section, etc. This one's pretty simple, all we're doing is rendering a `div` with an `h1` inside of it.

This is going to generate pretty much what you'd expect.

## Hi Lambda

hi lambda component

- hi lambda component //rendered from above if back ticks removed.

So what's so odd about this? Well, we're mixing two different syntaxes here. Part of this block is a regular Javascript function and part is HTML.

Javascript:

```JavaScript
const Intro = () => {
  return (
   ...
  );
};
```

HTML:

```HTML
    <div>
      <h1>Hi Lambda!</h1>
    </div>
```

That's weird! You can't do that in JavaScript so what the heck is going on here? We don't need to understand all the details yet, but the basic idea is that the above block only looks like HTML. In actuality, it is something else.

The fake HTML is called JSX and underneath its disguise, it's just a JavaScript object. This is a simplification, but what our example above effectively translates into is something like this.

THE CODE

```jsx
import React from 'react';

const Intro = () => {
  return (

      {
          type: 'div',
          props: {
              children: {
                  type: 'h1',
                  props: {
                      children: "Hi Lambda!"
                  }
              }
          }
      }

  );
};
```

how it renders

import React from 'react';

const Intro = () => {
  return (

      {
          type: 'div',
          props: {
              children: {
                  type: 'h1',
                  props: {
                      children: "Hi Lambda!"
                  }
              }
          }
      }

  );
};

So when we return what looks like HTML in a React component, what we're secretly returning is a JavaScript object that describes the kind of HTML we want to make. React is going to figure out how to make it for us later.

It's important to understand early on that a React component is just a regular JavaScript function. We could return an object (sort of) like the one written above, and it would work, but we want to use JSX for a couple of reasons. First, it's easier to read than that big nested object. And second, it's going to allow us to put our application's logic where it belongs: directly next to the thing the logic applies to.

### A brief demonstration of React's power

In the above example, we've hardcoded the text of our `h1` tag to read `Hi Lambda!`. But React gives us the ability to control our app's content dynamically. Look at this:

THE CODE

```JSX
import React from 'react';

const Intro = () => {
  const greeting = "Hi Lambda!";
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};
```

How it Renders

import React from 'react';

const Intro = () => {
  const greeting = "Hi Lambda!";
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

 hi lambda component

Our code changed, but our output is the same. Because we're just in a regular JavaScript function, we're free to declare a variable the way we normally do: `const greeting = "Hi Lambda!";`

Once we're in our JSX, React gives us the power to escape back into regular JavaScript and refer to that variable by using the curly brackets `<h1>{greeting}</h1>`.

These curly brakets will evaluate any valid JavaScript expression. So if we change `<h1>{greeting}</h1>` to `<h1>{2 + 2}</h1>`

We get:

4

Now you know the underlying mechanism of React. We don't want to have to hardcode the content of our HTML; instead, we want to compute it.

By now some of you are probably thinking, "Computing our markup, isn't that what we learned DOM manipulation for?" and it's a good question.

**Why do it this way?**
We're going to focus on two major pillars of React's design philosophy for now. The separation of concerns and declarative programming.

**Separation of concerns**
_How can We know the dancer from the dance_

In computer programming, "the separation of concerns" refers to a design philosophy that each piece of your code should do one and only one thing. Functions with a lot of moving parts are hard to debug. One large function might be tricky to test. If we can split that function apart into smaller pieces that are easy to test individually, our application will be more robust and easier to understand.

At first glance, it might appear that putting our markup right next to our JavaScript is a violation of this principle, but the React team thinks otherwise. They argue that we can't truly separate a `<button>` tag from the function the button invokes. Separating the two, one in an HTML file and another in a JavaScript file, isn't a separation of concerns, it's cutting one concern in half and then putting one half in the bedroom and the other half in the garage. It's a headache we don't need.

Consider the difference between this, the way you're used to doing it:

HTML

```HTML
//HTML FILE
<button class="button"></button>
```

JavaScript

```JS
//JS FILE
let button = document.querySelector('.button');
button.addEventListener("click", (data)=>{...logic} )
```

And the React way:

```JSX
//JSX
<button onClick={ () => submitForm(data) } />
```

I would argue there are a lot more opportunities for something to go wrong in
the first approach. i. e. HTML + JavaScript

### Imperative Programming vs Declarative Programming

We have an array:

```JS
let myArray = [1,2,3,4,5];
```

And we want to iterate over it and double each number. Here are two ways we could go about it.

```js
for (i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] * 2;
}
```

Or:

```js
const double =  number => number * 2;
myArray.map(double);
```

The first approach is an example of imperative code, and this is the kind of approach we're most familiar with. There's nothing wrong with imperative code, it's very explicit, and at a lower level, all code is ultimately imperative. The problem with imperative code is it's pretty difficult and in more complex examples, it can be hard to understand what the code does at a glance.

The second approach is an example of declarative code. Instead of telling the computer, step by step, how we want it to do something, we just tell it what we want it to do.

`myArray.map(double)`

**"Map over my array and double everything inside of it."**

With practice, declarative code is easier to parse. This is important because, believe it or not, as a programmer, most of your time isn't spent writing code. It's spent reading other people's code and trying to understand what it does. If you can grasp this distinction, and appreciate its value, congratulations. You now understand the basis of **functional programming**, the programming paradigm that React is modeled after.

So now we know the very basics of what React does and why it does it this way. In the next objective, we're going to introduce one of the single most important concepts in programming: state.

## Follow Along

Let's build a component that displays an image. This is how we would do that.

THE CODE

```js
import React from "react";
function App() {
  return (
    <div className="App">
      <img
        src="https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png"
        alt="lightbulb"
      />
    </div>
  );
}
```

**how it renders**

import React from "react";
function App() {
  return (
    <div className="App">
      <img
        src="https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png"
        alt="lightbulb"
      />
    </div>
  );
}

Notice how we have className instead of class in our JSX? That is because JSX is just JavaScript, and class is a reserved word in JS.

Now, one more trick we can do with JSX. We can evaluate JavaScript expressions. So we can read variables, run functions, read data from objects or arrays, all kinds of things! To do this, we use curly braces - {}. Here we will use curly braces to render the value of an object property as a header, and then we will evaluate a string variable as the src of the image.

import React from "react";

const image =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
const titleObj = {
  title: "Light Bulb!"
};

function App() {
  return (
    <div className="App">
      <h2>{titleObj.title}</h2> // this evaluates down to the string "Light
      Bulb!"
      <img src={image} alt="lightbulb" /> // this will evaluate down to the image
      url string for the img src
    </div>
  );
}
JSX is so powerful!

## Challenge

Start to build out React components from scratch. Have fun with this. Experiment with different elements.
