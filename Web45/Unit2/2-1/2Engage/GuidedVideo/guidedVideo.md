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
  - [Practice 2](#practice-2)
  - [Practice 3](#practice-3)
  - [Practice 4](#practice-4)

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

## Practice 2

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

## Practice 3

Changing an Elements text content `textContent`, `innerText' (subtle differences)

```JavaScript

```

## Practice 4

Accessing and changing element attributes with dot notation `setAttribut`, `getAttribute`

```JavaScript
```


