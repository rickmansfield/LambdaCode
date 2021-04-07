function eightBall(){
    const answer = Math.floor(Math.random() * 8 + 1);
    const fortunes = ["yes, definitely", "you can rely on it.", "Without a doubt.", "most likely.", "hmm... I'm not sure!", "yikes. Nope.", "try again.", "very doubtful."]

    // Manipulate the fortunes array here
    fortunes.push("I wouldn't if I were you.")//adds to the last index position in memory. 
    fortunes.pop();//removes the value at the final index position.
    fortunes.unshift("I wouldn't if I were you.");//adds value in memory at index position zero [0]. 
    fortunes.shift();
    
    let fortune = fortunes[answer];

    console.log(fortunes);//to see array changes

    console.log(fortune)
    
}
eightBall()

