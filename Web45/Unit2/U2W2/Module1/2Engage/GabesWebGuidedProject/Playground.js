/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react';
export default function Playground(props){
  //useState allows to set insternal state
  // it is a function that takes that desired initial state and returns an array with 2 things: the state itself and a state changer (which is a call back that allows the state to be mondified)
  //So no more DECLARING VARIABLES to hold state like with "let" or "const." 
  //Here is that old way
  // const theArray = useState(0);
  // const count = theArray[0];
  // const setCount = theArray[1];
  
  //Rather here is the new way...
  const [count, setCount] = useState(0)

  // return 'playground for ' + props.cohort;
  return (
  <div className="container" id={`cohort` + props.cohort}>
    <h3>Playground for Web {props.cohort}</h3>
    <div>the count is {count} </div>
    <button onClick={event =>{ setCount(count + 1) }}>increase</button>
  </div>
  )
}
