
# Objective 2

- use DOM selectors, and describe the differences in the behavior of each

## Contents

- [Objective 2](#objective-2)
  - [Contents](#contents)
  - [Overview](#overview)
    - [DOM Selectors](#dom-selectors)
    - [`getElement` Methods](#getelement-methods)
    - [`querySelector` Methods](#queryselector-methods)
    - [The Difference between `HTMLCollection`, `NodeList`, and `Array`](#the-difference-between-htmlcollection-nodelist-and-array)
  - [Follow Along](#follow-along)
    - [Selector Tutorial](#selector-tutorial)
    - [Don't Forget The Selector](#dont-forget-the-selector)
  - [Challenge](#challenge)
  - [MarkDownNotes](#markdownnotes)

## Overview

### DOM Selectors

Now that we know how to access the DOM using Javascript, we need a way to select individual elements (or groups of them). Doing so will give us access to all live elements and allow us to manipulate them.

To manipulate elements on the DOM, we need to select them. There are many ways of doing this; for example, we can select the body and the head just by asking for them (document.body, document.head). But, when we want to go deeper, that's where things get complicated. Thankfully, `document` has several built-in methods for accessing the exact element(s) we want.

It is important to note that all of these methods are case sensitive. If you are unsure of the case while using them, please refer to the official documentation.

### `getElement` Methods

These are the original methods for selecting elements from the DOM. They each take a single string as the only argument, containing either the id or class you are looking for.

```html
document.getElementsByTagName('p');
```

This method will take a single string as an argument containing the element name of the elements you want to select. It will return an array-like object called an HTMLCollection containing all the elements that contain the element name supplied. We will discuss what a `HTMLCollection` is after we talk about the rest of our selector methods.

```html
document.getElementById('idName');
```

This method will take a single string as an argument containing the id of an element, search through the DOM, and return the matching element.

```html
document.getElementsByClassName('className');
```

This method will take a single string as an argument containing the class of the elements you want to select. It will return an array-like object called an `HTMLCollection` containing all of the elements that hold the given class.

[Back to Top](#contents)

### `querySelector` Methods

These are the newest element selection methods added to the DOM. These methods allow us to select element(s) based on CSS style selectors (remember . is class and # is id). Each method takes a string containing the selectors and returns the element(s). Note - we can select by element, id, class, or others with both methods.

```html
document.querySelector('.custom-style');
```

This method will search for and return the first element that matches the value passed into the method. Remember from above that the biggest change from the older DOM selection methods is that we now need to pass the proper CSS selector into the argument.

If we passed `('custom-style')` and not `('.custom-style')` we would error out.

```html
document.querySelectorAll('queryString');
```

This method will search for and return ALL elements matching the query string. This method returns these elements in an array-like object called a NodeList

### The Difference between `HTMLCollection`, `NodeList`, and `Array`

When we use `getElementsByClassName()` or `querySelectorAll()` we get back either an `HTMLCollection` or a `NodeList` respectively. We refer these to as 'array-like objects.' We have seen an array-like object before (the `arguments` object in a function). They both have numerical zero-based indices and the length property, but that is all they share with an Array. `NodeList` does take it one step further, and has access to `.forEach`. There are no `.reduce` or `.map` or any other array method.

Pro tip: The Array class contains a method we can use to create an array from an array-like object, called `.from().` To use this, we would give `.from` the array-like object as its only argument.

```html
Array.from(arrayLikeObject)
```

[Back to top](#contents)

## Follow Along

### Selector Tutorial

Let's get some practice using different selector methods. You can use [this code](https://codepen.io/lambdaschool/pen/eLaXXb?editors=1010) (Links to an external site.) or write your own.

Study this HTML first:

```HTML
 <header>
    <h1 class="main-header">Selectors!</h1>
    <nav class="main-nav">
      <a href="#" class="nav-item">Home</a>
      <a href="#" class="nav-item">About</a>
      <a href="#" class="nav-item">Blog</a>
      <a href="#" class="nav-item">Contact</a>
    </nav>
  </header>
```

`querySelector()`
What if we wanted to select all the first a tags within our navigation? There are several ways to accomplish this task, but let's use `querySelector()` to get started.

When working with the DOM, we may want to re-use the reference several times in our code. Let's declare a const to hold our DOM reference:

```html
const mySelection = document.querySelector('a');
```

Notice we had to use document in front of querySelector() that is because querySelector is a method of the document object.

Next, let's log the result of our selection.

```html
const mySelection = document.querySelector('a');
console.log(mySelection);
```

We should see this log in the console:

```html
"<a href='#' class='nav-item'>Home</a>"
```

We now have access to that element node in the DOM! What if we wanted to select multiple elements at once? We have just the method for that: `querySelectorAll()`.

`querySelectorAll()`
If you recall from the introduction to selectors, `querySelectorAll()` will allow us to return an array-like object called a `NodeList`. Let's set up a new const for our new selection:

```html
const multipleSelections = document.querySelectorAll('a');
```

Notice that all we changed on the right side of the operator was adding an "All" to "querySelector." The returned value is very different though, check your console's log to see what happened. If you are using chrome developer tools, you will see something like this in your console:

```html
NodeList(4)
  0: a.nav-item
  1: a.nav-item
  2: a.nav-item
  3: a.nav-item
  length: 4
  __proto__: NodeList
  ```

Wow, that is totally different than our result from `querySelector()` in the first example! We now have a `NodeList` and all of the nodes matching the a elements.

What can we do with a `NodeList`? You can dig deeper into the documentation (Links to an external site.), but for our tutorial, let's see how it is "array-like."

Study this code:

```html
const multipleSelections = document.querySelectorAll('a');
console.log(multipleSelections[2]);
```

Notice the `multipleSelections[2`]. That looks very similar to how we can use indices in arrays. The log result from the code above should read as follows:

```html
"<a href='#' class='nav-item'>Blog</a>"
```

Being able to access elements in this way is extremely powerful and will allow you to be creative if an HTML solution is not possible. Imagine you didn't have a class or ID to hook into, you could use the `NodeList` index to get the job done!

### Don't Forget The Selector

When using querySelectorAll() don't forget it requires you to use the proper CSS selector. Using the same HTML example:

```html
<header>
  <h1 class="main-header">Selectors!</h1>
  <nav class="main-nav">
    <a href="#" class="nav-item">Home</a>
    <a href="#" class="nav-item">About</a>
    <a href="#" class="nav-item">Blog</a>
    <a href="#" class="nav-item">Contact</a>
  </nav>
</header>
```

Use `querySelectorAll()` to select all the nav-item classes:

```html
const multipleClasses = document.querySelectorAll('.nav-item');
```

Note that we had to type out the `.` in `.nav-item`. This trips up new developers to JavaScript all the time. If you were to log out the results of this session, you would see it's just a `NodeList` like before, but now it's using classes instead of the `a` element. Push yourself further by using the challenge below!

[Back to top](#contents)

## Challenge

Finish the DOM selector requests based on given HTML, LESS, and JS - follow this link for the challenge.

## MarkDownNotes

[Mark Down Notes You Tube](https://www.youtube.com/watch?v=pTCROLZLhDM&t=635s)

[VS Code Cheat Sheet](http://bit.ly/vscodecs)
