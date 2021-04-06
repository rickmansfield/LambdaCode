

// add loop to flip coin 5x

for (let count = 1; count < 6; count++) {
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 1) {
    console.log(count + " Heads");
    }

    if (coinFlip === 0) {
    console.log(count + " Tails");
    }
}