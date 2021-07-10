# Objective 1

- describe ReactJS and the problems that it tries to solve

## Contents

- [Objective-1](#objective-1)
  - [Contents](#contents)
  - [Overview](#contents)
  - [Follow Along](#follow-along)

## Overview

React has quickly become one of the most commonly used libraries for building applications today. Because you've now seen some code that allows you to build custom components with so-called vanilla Javascript, you've come to an understanding of how you can use JS to manipulate DOM elements. React is going to take that knowledge you have learned, and abstract away a lot of the document.getElementByClassname syntax. As you'll see later on, your entire application will live within one targeted DOM element. React will handle the rest for you.

Because we have such rich user interfaces today that interact with ever-changing data, users interacting with DOM elements, and lots of animations and events firing, the DOM is certainly doing a lot of work. Imagine an app like Twitter or Facebook that has users clicking all over the place, with data changing and almost instant status updates. For these types of large scale applications, React is very important. Simply put, we need a way to offload a lot of the state (data) that our apps need to use, from the DOM. To keep up with today's demands of the web, we need a way to build applications that can take care of a lot of the work for us.

Lets face it, working with the DOM API is hard. The React team recognizes this, so they built a simple engine called the virtual DOM that interacts with the actual DOM for us. We tell the virtual DOM which elements and state (data) to render to the actual DOM, and it will do so. Beyond that, it will "react" when the state (data) in our app changes, and will update the DOM accordingly. All on its own!

In a process called "reconciliation", React will detect that the state of the app has changed. Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. This takes a lot of pressure off of our browsers and it's why React is as powerful as it is.

Today, web applications are enormous, complex pieces of software that millions and millions of users interact with simultaneously. React provides a smooth experience for our users, as well as those developing applications.

## Follow Along

Please read through the 'Try React' tutorial found [here](https://reactjs.org/docs/try-react.html) (Links to an external site.) and follow along with the documentation there. Take it as far as you'd like. But we'd love for you to come into class on Monday having played around with React and seen some React code.

- Read through [this portion](https://reactjs.org/docs/thinking-in-react.html) (Links to an external site.) of the React documentation.
Challenge
In your own, write a paragraph about what ReactJS is and what problems that it tries to solve.

Submit that paragraph to your Team Lead via Slack.

## Challenge Answer

- After reviewing [React](https://reactjs.org/) they say it's a Javascript library for building user inerfaces. In my own words, React.js is an open-source JavaScript Library. It is not a language. It's used to build out DOM from within a JS file specifically for single-page type applications giving a smooth fast user interface. It's scalable and it makes both the front end developer job and UX optimal. Let's pat Mark Zuckerburg's Jordan Walke (software engineer) on the back for making our lives easier.
  
  ## Helpful sites qqqq
    [JavaScript.info](https://javascript.info/)
