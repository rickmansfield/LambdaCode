// initalizing with arguments 
function Pet(name, species, pronoun, favFood){
    this.name = name;
    this.species = species;
    this.pronoun = pronoun;
    this.favFood = favFood;
  }
  
  Pet.prototype.eat = function(){
    return `${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`;
  }
  
  //creating my new object with arguments 
  const petOne = new Pet('Ada', 'Bali dog', 'her', 'salmon');
  
  console.log(petOne.eat());
  console.log(petOne);