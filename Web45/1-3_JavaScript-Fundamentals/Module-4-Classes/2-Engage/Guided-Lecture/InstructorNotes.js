// Breakout (the old way)
// create a pet constructor with a name location and phrase as attributes and a speak method that returns: name says phrase 
// the create a baby pet that has the ability to speak and play the baby pet should also have a toy. The play method should return name plays with their toy

// The Old way
function Pet(attributes){
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
  }
  
  Pet.prototype.speak = function(){
    return `${this.name} says ${this.phrase}`;
  }
  
  //Creating a child (the old way)
  
  function Child(attributes){
    Pet.call(this, attributes); // this is telling the child to inherit from Pet
    this.toy = attributes.toy; // special attribute for the child
  }
  
  Child.prototype = Object.create(Pet.prototype); // inherit the Pet's methods
  
  Child.prototype.play = function(){
    return `${this.name} plays with their ${this.toy}`;
  }