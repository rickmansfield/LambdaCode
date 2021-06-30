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
  - [Practice](#practice)

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

## Practice

From the second card

```JavaScript
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const card = secondCard;
const cardImage = null;
const cardTitle = null;
const cardSubtitle = null;
const cardText = null;
const cardLink1 = null;
const cardLink2 = null;
```
