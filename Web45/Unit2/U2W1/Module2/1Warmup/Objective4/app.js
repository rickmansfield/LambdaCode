//old way
window.onload = function (event) {
  console.log(`an event happened, of type ${event.type}`);
};

//New Modern Way
window.addEventListener('load', event => {
  console.log(`${event.type} happened`);
});

/* Use this sample as a quide */
let sampleButton = document.querySelector('.sampleButton');
sampleButton.addEventListener('click', (event) => {
  alert('You Clicked the Sample Button!')
})

/* NOTE: DO NOT change any HTML or CSS in this exercise, refer to the HTML for the class names of the elements */

/* Step One: Select the container and button elements */
const button2 = document.querySelector(".container .button");
console.log(button2);


/* Step Two: Use the method addEventListener on the button element, listening for a 'click' event */
button2.addEventListener('click', event =>{
  console.log(`you ${event.type}ed on the ${event.target.nodeType}`);
});


/* Step Three: Using the 'event' object in the callback, Change the background color of the button */

button2.addEventListener('click', event =>{
  console.log(`Changing the DOM`)
  event.target.style.backgroundColor = 'red';
});

/* Step Four: Click on the button, does it work? */

//Answer=================================
//Clicked and it works perfectly. !!!!!!!


/* Step Five: Use the method addEventListener on the container element, listening for a 'mouseenter' event */

//Answer ================================
// button2.addEventListener('mouseenter', event => {
//   document.container.style.backgroundColor = 'blue';
// })


/* Step Six: Using the 'event' object in the callback, Change the background color and the border color of the container */

button2.addEventListener('mouseenter', event => {
  event.target.style.backgroundColor = 'black';
});

/* Step Seven: Reverse the color changes to the container on a 'mouseleave' event */

button2.addEventListener('mouseleave', event => {
  event.target.style.backgroundColor = 'dodgerblue';
});

/* Step Eight: Finish the section in TK on stopPropagation */


/* Step Nine: Create a click event on the container, it can do whatever you want it to, but make it visible */



/* Step Ten: Click the button, notice how the container click event also triggers? */

/* Step Eleven: Add stopPropagation to the button click handler */

/* Step Twelve: Click the button now, the click should not propagate to the conainer. */
/* All Done! */
