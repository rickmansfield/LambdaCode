function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  function eightBall() {
      const fortunes = ["yes, definitely", "you can rely on it.", "Without a doubt.", "most likely.", "hmm... I'm not sure!", "yikes. Nope.", "try again.", "very doubtful."];
      var fortune = fortunes[getRandomInt(0,7)];
      console.log(fortune)
      return fortune
      
  }
  eightBall()