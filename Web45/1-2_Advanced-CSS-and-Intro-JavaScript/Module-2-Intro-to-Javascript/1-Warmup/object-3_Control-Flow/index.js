// Write a conditional such that it will console.log if the number of letters in someone's name is even or odd and will throw an error if a non-string input is given
let anyName = 'Rick';
if(typeof anyName !== 'string'){
    console.log(anyName + ' is not a string');
} else if(anyName.length %2 === 0 ){
    console.log("There are an even number of letters in " + anyName);
} else {
    console.log("There are an odd number of letter in " + anyName);

}


// For example, if name = "Sam", the conditional would console.log "There are an even number of letters in 'name'"
// or if name = "Jake", the conditional would console.log "There are an odd number of letters in 'name'"
// or if name = 2, the conditional would log "name is not a string" 