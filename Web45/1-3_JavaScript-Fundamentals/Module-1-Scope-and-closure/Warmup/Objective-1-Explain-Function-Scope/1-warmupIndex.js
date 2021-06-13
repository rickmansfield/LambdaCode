// note the variable is declared outside the loop but in side the fuction. The loop reaches outside and gets the var coutHeads. Thus, it is referenced and chagned INSIDE the "for" loop but it will reset to ZERO every time the function is run.

function flip(repeat) {

    var countHeads = 0;//inside the function but outside the loop. Remember NOT to put the variable outside the function too. Because then it would NOT reset. When outside the function it is reassigned to the resulting value. When it is inside the function (and outside the loop) after the calculation is complete it resets to it's orginal value of zero. 

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
    