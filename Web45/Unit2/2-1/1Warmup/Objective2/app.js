/*

  For this challenge you will be asked to follow the requests below and decipher which selector method you should use.  
  
  Once you have finished, you can check your work here:  https://codepen.io/lambdaschool/pen/OoYqNM?editors=1010
  
*/ 

/*
  Request 1: Log the result of every `a` element on the page. The result should be an `HTMLCollection`
*/

const anchorTags = document.getElementsByTagName('a');
console.log(anchorTags);


/* 
  Request 2: Log the result of every `a` element on the page. The result should be a `NodeList`
*/

const moreAnchorTags = document.querySelectorAll('a');
console.log(moreAnchorTags);

/* 
  Request 3: Locate the ID in the HTML. Log the element that the ID is on.
*/

const customID = document.getElementById('first-heading');
console.log(customID);
// OR with a querySelector()
const customIDv2 = document.querySelector('#first-heading');
console.log(customIDv2);

/* 
  Request 4: Log the first class that matches ".main-content"
*/

const mainContent = document.querySelector('.main-content');
console.log(mainContent);
//NOTICE without "All" you get the first one. i.e. document.querySelectorAll. 

/* 
  Request 5: Log the third element with a class of ".nav-item"
*/

// const thirdNavItem;
// console.log(thirdNavItem);



