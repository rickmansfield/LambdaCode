
// ------- Please begin your work below this line: -------
function exerciseOne(){
    // In this exercise, write a simple 'for loop' that starts the variable 'i' at 0 and 
    // increases i until it reaches 6.
    // Fill in the blanks in the parentheses, and then console.log(i) inside of the fo loop
    for(let i = 0; i < 6 ; i++ ){
        console.log(i);
    }
    
    // Please write your answer in the line above.
  }
  
  
  function exerciseTwo(){
    let count = 0;
    // In this exercise write your own for loop (you can look at the syntax above). 
    // It should loop 10 times.
    // You are given a variable called: count .
    // For each loop reassign count to the current value of count + 1 .
    for (let i = 0; i <10; i++){
        count += 1;
        //alternatively count++;
        //alternatively count = count + 1;
        console.log(count);
    }
    //Please write your answer in the line above. 
    return count;
    
    
  }
  console.log(exerciseTwo());