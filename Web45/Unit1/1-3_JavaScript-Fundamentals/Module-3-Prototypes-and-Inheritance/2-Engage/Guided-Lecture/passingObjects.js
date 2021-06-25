// initalizing with an object
function Pet(attributes){
  this.name = attributes.name;
  this.species = attributes.species;
  this.pronoun = attributes.pronoun;
  this.favFood = attributes.favFood;
}

Pet.prototype.eat = function(){
   return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
}

// initalizing with an object
const petOne = new Pet({
  name: 'Ada',
  species: 'Bali dog',
  pronoun: 'her',
  favFood: 'salmon',
});

const petTwo = new Pet({
  name: 'Egg',
  species: 'Border Collie',
  pronoun: 'his',
  favFood: 'carrots',
});

const petThree = new Pet({
   name: 'Frost',
  species: 'cat',
  pronoun: 'his',
  favFood: 'cheese',
});

const petFour = new Pet({
  name: 'Lola',
  species: 'dog',
  pronoun: 'her',
  favFood: 'peanut butter',
});

const petFive = new Pet({
  name: 'Silver',
  species: 'Blue Sapphire Chicken',
  pronoun: 'her',
  favFood: 'worms',
});


console.log(petOne);
console.log(petOne.eat());
console.log(petTwo.eat());
console.log(petThree.eat());
console.log(petFour.eat());
console.log(petFive.eat());