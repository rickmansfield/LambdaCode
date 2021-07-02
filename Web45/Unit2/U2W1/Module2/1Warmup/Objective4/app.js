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
  console.log(`Changing the DOM`);
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
function listener(event) {
  console.log(`event passing through ${event.currentTarget.nodeName || 'Window'} target --> ${event.target.nodeName}`
  );
}

button2.addEventListener('click', listener);//should read "event passing through DIV." The video (for THEIR example) says "event passing through BUTTON" is the inner most target. But in this case (inpsect index.html) the inner most target is a <div> inside another <div> not a <button> inside a <div>


/* Step Nine: Create a click event on the container, it can do whatever you want it to, but make it visible */
const container = document.querySelector('.container');
console.log(container);
container.addEventListener('click', event => {
  event.target.style.border = 'purple';
  event.target.style.border = '5px';
  event.target.style.backgroundColor = 'pink';
});



/* Step Ten: Click the button, notice how the container click event also triggers? */

//Answer=========================================
//not sure how userfull this is.. but ok I get it. Order listeners are added to separate elements doesn't make any difference. The most **deeply nested element fires first** and then the next outtermost fires after that and so on. Cool? or Annoying? lol
window.addEventListener('click', listener);
document.addEventListener('click', listener);
const body = document.querySelector('body');
// button2.addEventListener('click', (e) => e.stopPropagation());
document.body.addEventListener('click', (e) => e.stopImmediatePropagation());
body.addEventListener('click', listener);
button2.addEventListener('click', listener);

//However order in which listeners are added to the SAME element IS important. They fire in the order they were added due to the "bubbling phase" post the capture save. The event goes straight to the target phase and then the bubbling occurs phase. 
button2.addEventListener('click', e => console.log('click!'));

//This can be interrupted with hard coded event firing insdie the code. Hence the reason for the next step.

/* Step Eleven: Add stopPropagation to the button click handler */
// button2.addEventListener('click', (e) => e.stopPropagation());

/* Step Twelve: Click the button now, the click should not propagate to the conainer. */

//Answer======================
//worked great. I posted the answer in step eleven and copied it into step 10 to comment it out (turn it on/off) and "body" would stop being propagated while it was on during a click. i.e. the event listener for body would not propagate since the .stopPropagatio() was place BEFORE that point in the code. 
//Coolieo... but... WHY... why would I want this? 
//Experimented with document.body.addEventListener('click', (e) => e.stopImmediatePropagation()); as well. 
/* All Done! */