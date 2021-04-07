function eightBall(){
    const answer = Math.floor(Math.random() * 8 + 1);
    const fortunes = ["yes, definitely", "you can rely on it.", "Without a doubt.", "most likely.", "hmm... I'm not sure!", "yikes. Nope.", "try again.", "very doubtful."]

  // Manipulate the fortunes array here

    fortune = fortunes[answer];
    console.log(fortune)
}
eightBall()