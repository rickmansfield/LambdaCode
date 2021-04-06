function flip(){
for (let i = 0; i < 5; i++) {
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 1){
      console.log("Heads")
    }
    else{
      console.log("Tails")
    }
  }
}
flip();