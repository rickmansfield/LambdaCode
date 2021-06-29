// Follow the instructions provided in training kit and then follow along here.



// Change the color (i.e. Style 8:02 of class video) of the paragraphs
// 1a)
//here I'm selecting the first <p> tag
const paraColor = document.querySelector('p');
console.log(paraColor);
// then asserting the change to the element via .style
paraColor.style.color = 'purple';


// 2) Change the text contents of any element of your choosing. 
// 2a) I chose the "first" <p> paragraph element
const pContent = document.querySelector('p');
console.log(pContent);
pContent.textContent = 'This is a whole new paragraph with completely new text in it. To restore the old text comment out this section.';
// 2b) Here we select the .second-heading classs
const secondHeading = document.querySelector('.second-heading');
console.log(secondHeading.textContent);
secondHeading.textContent = "Updated Content";
console.log(secondHeading.textContent);

// 3) Change the href of an anchor tag
// Note This requires knowing the the href is an attribute and
//therefore preferably we might use .setAttribute() over .{att}
// 3a) using .setAttribute
const navItems = document.get



// Update the alt tag of an image
// Update layout styles, try out flex properties with JavaScript syntax