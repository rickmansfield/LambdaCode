# Guided Lecture

## Contents

- [Guided Lecture](#guided-lecture)
  - [Contents](#contents)
  - [Video](#video)
  - [DOM Defined](#dom-defined)
    - [Clone elements](#clone-elements)
    - [Append an Element](#append-an-element)
    - [Example Manipulations](#example-manipulations)
    - [Create an Array](#create-an-array)
  - [Practice 2 Finding collections of elements](#practice-2-finding-collections-of-elements)
  - [Practice 3 .textContent()](#practice-3-textcontent)
  - [Practice 4 Change property .setAttribute()](#practice-4-change-property-setattribute)
  - [Practice 5 Styling Elements by .classList()](#practice-5-styling-elements-by-classlist)
  - [Practice 6 .creatElement()](#practice-6-createlement)
  - [Practice 7](#practice-7)

## Video

- Here is the video [Guided Video](https://www.youtube.com/watch?v=XydfZvsoOJw&t=7s)

## DOM Defined

- The DOM is an interface collection of buttons, levers, and readouts that your code can use to manipulate the page.
  
### Clone elements

```javascript
const firstCard = document.querySelector('card');

const copyOfFirstCard = firstCard.cloneNode(true);
//check console.log(copyOfFirstCard);
```

### Append an Element

```javascript
// long way to get the 
const CardContainer = document.querySelector('.card-group');
// Short way
//const parentDiv = firstDiv.parentElement;
CardContainer.appendChild(copyofFirstCard);
```

### Example Manipulations

Here we

- collect all cards in an array and then
- pick the second card from the array
- loop over the array apply text content
- the `data[index].heading` is from the video example and represents what real data from a server would look like.

```javascript
const cards = document.querySelector('.card');
const secondCard = cards[1];
cards.forEach((card, index) => {
    const h2 = card.querySelector('h2')
    h2.textContent = data[index].heading
})
```

### Create an Array

Here we

- create a real array of cards so that we can use various methods otherwise unavailable.

```javascript
const realArrayOfCrads = Array.from(cards)
console.log(realArrayOfCards);
```

## Practice 2 Finding collections of elements

This exercise involves finding an element on the page and saving a reference to it.

- Older: `getElementByID`, `getElementByTagName`, `getElementByClassName`
- Newer: `querySelector`, `querySelectorAll`

From the second card (already established above)

```JavaScript
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const card = secondCard;
const cardImage = secondCard.querySelector('img');
const cardTitle = secondCard.querySelector('h2');
const cardSubtitle = secondCard.querySelector('h3');
const cardText = secondCard.querSelector('.card-text');
const cardLink1 = secondCard.querSelector('a');
const cardLink2 = secondCard.querSelector('a:nth-of-type[2]');
```

## Practice 3 .textContent()

Changing an Elements text content `textContent`, `innerText' (subtle differences)

```JavaScript
cardTitle.textContent = "New H2";
cardSubtitle.textContent = "New H2";
cardText.textContent = "New Card Text";
cardLink1.textContent = "New Link 1";
cardLink2.textContent = "New Link 2";
```

## Practice 4 Change property .setAttribute()

Accessing and changing element attributes with dot notation `setAttribut`, `getAttribute`

```JavaScript
cardImage.src = 'https://th.bing.com/th/id/R5094323593019233df5977c369103a19?rik=hTA2HPudUs5n%2fw&pid=ImgRaw'
cardImage.setAttribute('src', 'https://buff.ly/3AfZ4hh');
```

## Practice 5 Styling Elements by .classList()

changing the style. Note the "sky" classname should turn the background color to blue.

- by changing the class names on the element with 
  - .setAttribute() //sucks
  - .classList

```JavaScript
card.setAttribute('class', 'card sky');//dot notation and setAttribute sucks. Instead use .classList
card.classList.add('sky');
header.classList.add('sky');
header.classList.remove('sky');
setInterval(()=> {
    header.classList.toggle('sky')
}, 1000);
```

- by manipulating the inline styles on the element.Remember that this is dangerous because it always wins in CSS and overrides other styles.

```JavaScript
card.style.backgroundColor = 'royalblue';
```

## Practice 6 .creatElement()

Create new elements and append them

```JavaScript
const newLink = document.createElement('a');
const newLink.textContent = 'blah';
newLine.href = 'a';
document.querySelector('#mainNav').appendChild(newLink);
```

## Practice 7

Remove an exiting element and put it back

```JavaScript
```
