// // Follow the instructions provided in training kit and then follow along here.



// // Change the color (i.e. Style 8:02 of class video) of the paragraphs
// // 1a)
// //here I'm selecting the first <p> tag
// const paraColor = document.querySelector('p');
// console.log(paraColor);
// // then asserting the change to the element via .style
// paraColor.style.color = 'purple';


// // 2) Change the text contents of any element of your choosing. 
// // 2a) I chose the "first" <p> paragraph element
// const pContent = document.querySelector('p');
// console.log(pContent);
// pContent.textContent = 'This is a whole new paragraph with completely new text in it. To restore the old text comment out this section.';
// // 2b) Here we select the .second-heading classs
// const secondHeading = document.querySelector('.second-heading');
// console.log(secondHeading.textContent);
// secondHeading.textContent = "Updated Content";
// console.log(secondHeading.textContent);

// // 3) Change the href of an anchor tag
// // Note This requires knowing the the href is an attribute and
// //therefore preferably we might use .setAttribute() over .{att}
// // 3a) using .setAttribute and isolating one of all four <a> tags. 
// // const navItems = document.querySelectorAll('#href');
// const navItems = document.querySelectorAll('a');
// console.log(navItems);
// const navItemAbout = navItems[1];
// navItemAbout.setAttribute('href', "#About");
// console.log(navItemAbout);



// // 4) Update the alt tag of an image. 
// //Note: While there is only one image I've elected to use "querySelectorALL()" to remind me how to identify any "one" of "all" the possible images on a DOM
// const kittyImgAlt = document.querySelectorAll('img');
// console.log(kittyImgAlt);
// const kittyImgAlt0 = kittyImgAlt[0];
// console.log(kittyImgAlt0);
// kittyImgAlt0.setAttribute('alt', "Shocked and dissapointed white Kitten");

// // 5) Update layout styles, try out flex properties with JavaScript syntax

// const mainHeader = document.querySelector('h1');
// console.log(mainHeader);
// mainHeader.style.color = 'white';
// mainHeader.style.background = 'black';
// mainHeader.style.display = 'flex';
// mainHeader.style.flexDirection = 'column';
// mainHeader.style.alignItems = 'center';

// ===============================
// u2 m1 ob4 follow along
const headerEl = document.querySelector('header');
console.log(headerEl);

const newSubHeader = document.createElement('h1');
// console.log(newSubheader); //this will not work use Chrome remember it's just floating in cyber space still
newSubHeader.textContent = "WHAT THE HELL!";
// console.log(newSubheader); //this will not work use Chrome remember it's just floating in cyber space still
newSubHeader.style.fontSize = '3.4rem';
// console.log(newSubheader); //this will not work use Chrome remember it's just floating in cyber space still
newSubHeader.style.color = "Slategrey";

headerEl.appendChild(newSubHeader);//THIS Step makes it visible on the browser. 

//Example #2
const section = document.querySelector('section');//not seen yet
section.style.flexWrap = "wrap";//not seen yet
section.style.justifyContent = "center";//not seen yet
const newCat = document.createElement('img');//not seen yet
newCat.src = "images/kitty2.JPG";//not seen yet
newCat.style.marginRight = "20px";//not seen yet
newCat.alt = "Another Cat";//not seen yet
section.prepend(newCat);//THIS Step makes it visible on the browser
