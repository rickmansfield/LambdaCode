// import { StrictMode } from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css"
// import App from "./App";

//bulb should have a slice of state called "isBulbOn"
// isBulbOn can have one of two values: true or false.
//isBulbOn should start out as false. IMO
// bulb needs a "state setter", a fuction called "setIsBulbOn"
// setIsBulbOn(true) --> isBulbOn changes state to be true
// setIsbulb(false) --> isBulbOn changes state to be false

function Bulb() {
  // old syntax
  // const something = useState(false);
  // const isBulbOn = something[0];
  // const setIsBulbOn = something[1];
  // new syntax
  const [isBulbOn, setIsBulbOn] = useState(false);

  setTimeout(() => {
    setIsBulbOn(!isBulbOn)
  }, 1000);

  return <div>The lightbulb is {isBulbOn ? `on` : 'off.'} </div>
  
  // if (isBulbOn) {
  //   return <div>The lightbulb is ON</div>
  // }
  // return <div>The lighbulb is OFF</div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <Bulb />
  ,
  rootElement
);
