# Objective 3 

- explain what events are in the browser window, and how event listeners can listen for those events.

## Contents

- [Objective 3](#objective-3)
  - [Contents](#contents)
  - [Overview](#overview)

## Overview

We use Javascript to make our pages dynamic and usable. Now that we can access and manipulate elements on our page, you might be wondering to yourself, "Why don't we just change the elements in the HTML file directly? Why do we have to go through all of this just to change some styling on an element?" Those are valid questions, and the way we have been using Javascript so far, it would make sense to change our HTML instead.

But, Javascript's real power lies in its ability to make webpages interactive. In addition to manipulating elements, Javascript also allows us to add features and make modifications to our site by directly reacting to user interactions. Think about a button click, drag and drop, zoom, or any number of user interactions. We create functionality for those interactions using JavaScript. Now that we know how to manipulate and modify DOM nodes, we can learn about events.

Every user interaction with a site is an event: a click, moving the mouse, scrolling the page, pressing a key on the keyboard, these are all events on the page, and the browser can detect all of them. There are tons of different events the browser tracks. When an event happens on a page, it is known as a trigger.

Now that we know what an event is and we know the browser is always tracking them, we need to be able to listen for specific events on specific elements. Did a user click that button? Did a users mouse hover over an element? Was there text entered into the input field? There are dozens of events an element can listen for. When one of those events happens on that element, we can do something about it. The tracking process and subsequent action taken is called an event listener. We put an event listener on an element and give it a callback. When that event is triggered on the element, the callback is run.

```JavaScript
var count = 0
eventTypes.forEach(type => {
  document.addEventListener(type, event => {
    console.log(count++, type)
    console.log(event)
    console.log(`\n`)
  })
})
```
