function flip(repeat){
    for (let i = 1; i <= repeat; i++){
      var coinFlip = Math.round(Math.random());
      if (coinFlip === 1){
        console.log(i + " Heads");
      }
      else{
        console.log(i + " Tails");
      }
    
    }
    }
    
    flip(4);