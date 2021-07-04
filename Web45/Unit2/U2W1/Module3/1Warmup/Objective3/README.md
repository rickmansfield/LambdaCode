# Objective 3 

- iterate over a list of data creating a new component for each item and attaching that component to the DOM

## Contents

- [Objective 3](#objective-3)
  - [Contents](#contents)
  - [Overview](#overview)
  - [.forEach](#foreach)
  - [.map](#map)

## Overview

In the next lesson, we will learn how to retrieve dynamic data, but for now, we are going to build and use our own array. Let's imagine that this data can change and may not always look like how we built it. We want a way to create components based on the data present. This data can come in many different forms. In this simple case, we are using an array of strings:

```JavaScript
const data = [
    "Button One",
    "Button Two",
    "Button Three",
    "Button Four"
]
```

Let's use the <button>buttonCreator</button> function from the last objective:

```JavaScript
function buttonCreator(buttonText){
    const button = document.createElement('button');

    button.textContent = buttonText;

    button.classList.add('button');

    button.addEventListener('click', (e) => {
        console.log('clicked!');
    });

    return button;
})
```

## .forEach

One of the simplest array methods is <button>.forEach</button> - it runs the array through a loop, passing each item to our callback function. It doesn't return a new array or mutate the data at all (unless we tell it to). `.forEach` is a simple way to iterate over the array, create components, and add them instantly to the DOM.

```JavaScrip
data.forEach((arrayItem) => {
  let newButton = buttonCreator(arrayItem);

  parent.appendChild(newButton);
});
```

That was super simple! Just like that, we created a new component for each item in the array and added it to the DOM. No matter how many items are in the array, it will still work. One downside to this method is that we add the items to the DOM instantly, what if we wanted to create the components and add them at a different time?

## .map
We know that <button>.map</button> returns a new array with the items transformed (by our callback). We can then do whatever we please with this array.

```Javascrip
let newComponents = data.map((arrayItem) => {
  let newButton = buttonCreator(arrayItem);

  // Remember, we always need to return something when we use .map
  return newButton;
});
```

Now that we have an array of DOM elements (components), we can do whatever we'd like with them. We can wait to add the components to the DOM, or we can manipulate them further, the sky is the limit! Let's add them to the DOM now, using .forEach

```JavaScrip
newComponents.forEach(component => {
  parent.appendChild(component);
});
```