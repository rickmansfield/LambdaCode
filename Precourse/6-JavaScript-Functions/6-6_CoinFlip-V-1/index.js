function flip(repeat) {

    var countHeads = 0;

    for (let i = 1; i <= repeat; i++) {

      var coinFlip = Math.round(Math.random());

      if (coinFlip === 1) {
        console.log(i + " Heads");
        countHeads += 1; 
      }

      if (coinFlip === 0) {
        console.log(i + " Tails");
      }
      
    }

    return(countHeads/repeat);
    
}
    
    console.log(flip(100)); // <- will flip coin 100 times
    