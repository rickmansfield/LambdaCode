const yourObject = {
    name: 'Dan Frehner',
    city: 'Salt Lake City',
    favoriteFood: 'Burritos'
  }
  
  const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']
  
  function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
  }
  
  // Using yourObject and thingsYouEnjoy array, set the context of this on tellUsAboutYourself and call the function.
  
  
  //If you finish fast add some keys to the yourObject and use them in the funciton. Or create your own function.