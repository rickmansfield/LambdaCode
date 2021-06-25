function eightBall(){
    const answer = Math.floor(Math.random() * 8 + 1);
    var fortune = "";

    if (answer == 1) {
        fortune = "yes, definitely.";
    }
    if (answer == 2) {
        fortune = "you can rely on it.";
    }
    if (answer == 3) {
        fortune = "Without a doubt.";
    }
    if (answer == 4) {
        fortune = "most likely.";
    }
    if (answer == 5) {
        fortune = "hmm...I'm not sure!";
    }
    if (answer == 6) {
        fortune = "yikes. Nope.";
    }
    if (answer == 7) {
        fortune = "try again.";
    }
    if (answer == 8) {
        fortune = "very doubtful.";
    }
  console.log(fortune)
}

eightBall()