const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    // Example: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2
    let count = 0;
    return function(){
        count = count +1;
        return count;
    };
  };

  const newCounter = counter();
  console.log(newCounter);
  console.log(newCounter);