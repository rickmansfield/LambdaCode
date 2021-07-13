import React, { useState } from "react";
import ReactDOM from "react-dom";

function Game(props) {
    const  { player } =props;
    const [score, setScore] = useState(0);
    const increase = () => {
        setScore(score + 1);
    };
    const decrease = () => {
        setScor(score - 1);
    };
    return (
        <div>
            <ScorBoard player = { player } score = { score }/>
            {/* <button onClick{increase}>increase</button> */}
            {/* <ScoreIncreaser increase={increase} /> */}
            <ScoreChanger onScoreChange={increase} label='Increase' score={score}/>
            <ScoreChanger onScoreChange={decrease} label='Decrease' score={score}/>
        </div>
    );
}


function ScoreBoard(props) {
    const { score } = props;
    return <h3> {player} is at { score } points </h3>
 }

//  fuction scoreIncreaser(props) {
//      const {increase } = props;
//      return <button onClick={increase}>increase</button>
//  }

function ScoreChanger(props) {
    const { onScoreChange, label, score } = props;
    return <button onclick={onScoreChange}>{label} {score}</button>
}
 
const rootElement = document.getElementById(#root);
ReactDOM.render(<Game player='Gabe' />, rootElement);