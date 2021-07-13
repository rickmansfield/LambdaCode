import React from "react";
import ReactDOM from "reaact-dom";
import "./styles.css";

const siths = [ {name: 'Darth Vader'}, {name: 'Palpatine'}];

//think of this Parent Component as the declaration
function App({ friends }) {
    // const friends = props.friends;
    return (
    <>
    {/* <div>Hello, {friends[0].name}! How are you doing? </div>;
    <div>Hello, {friends[1].name}! How are you doing? </div>; */}
    <Greeter who={friends[0].name />;
    <Greeter who={friends[1].name />;
    <ThingEnumerator thing='dollars' count={300} />
    <ThingEnumerator thing='pals' count={friends.length * 3} />
    </>
    )
};

//This is the child componenet. It's where the data from the parent is injected for use. 
function Greeter(props) {
    // const who = props.who;// the next line is the same but destructured
    const { who } = props;
    return <div>Hello, {who}! How are you doing? </div>;
}

function ThingEnumerator(props) {
    const { thing, count } = props;
    return <h3>I have { count } { thing } ! </h3>
}

const rootElement = document.getElementById('#root');

//think of this as the execution
ReactDOM.render(<App friends={siths}/>, rootElement);
