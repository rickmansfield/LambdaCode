function getWinners(array, getFinalscb2) {
    const winners = getFinalscb2(array);
    if (winners.filter(item => item(["Home Team Goals"]) > item(["Away Team Goals"]))){
        return (winners.filter(item => item(["Home Team Goals"])));
    } else {
        return (winners.filter(item => item(["Ayay Team Goals"])));
    }
}


    winners = winners.map(function(item){
            return item["Home Team Goals"] > item["Away Team Goals"]? item["Home Team Name"]: item["Away Team Name"]
        })

        winners = winners.map(function(item){
            return item["Home Team Goals"] > item["Away Team Goals"]? item["Home Team Name"]: item["Away Team Name"]
        })
    
    

        // task 5 
        const years = getYearsCB(arr, getFinals);
  const winners = getWinnersCB(arr, getFinals);

  //   task 5 alternative
return years.map((i, index) => `In ${i}, ${winners[index]} won the world cup!`);
