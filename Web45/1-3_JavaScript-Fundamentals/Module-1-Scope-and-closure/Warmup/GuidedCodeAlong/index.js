function score(){
    return Math.floor((Math.random() * 5) + 1);
}

// console.log(score());

function hockeyGame(scoreCB){
    return {
        Home: scoreCB(),
        Away: scoreCB(),
    };
}
// console.log(hockeyGame(score));


function totalGameScore(scorecb, gamecb){
    const totalGame = [];
    let homeScore = 0;
    let awayScore = 0;
    for (let i = 0; i < 3; i++){
        const currentScore = gamecb(scorecb);
        homeScore = homeScore + currentScore.Home;
        awayScore = awayScore + currentScore.Away;
        totalGame.push(`perriod ${i + 1}: Away: ${currentScore.Away} - Home: ${currentScore.Home}`);
    }
    return totalGame;
}
console.log(totalGameScore(score, hockeyGame));