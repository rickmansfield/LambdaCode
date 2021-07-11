import React from 'react';
import { render } from 'react-dom';
import Playground from './components/Playground';

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

//we may have many of these funtions
function App(props) { // one object called "props"
  const { cohort, instructor, happy, week } = props;
  return (
    <div className='container'>
      <h1 id="mainHeading">Welcome to React, Web {cohort}</h1>
      <div> {instructor} Welcomes you!</div>
      {/* <div>He is {happy}</div> */}
      {happy ? <div>True Very Happy</div> : <div>False Unhappy</div>}
      <div>It is week {week}</div>
      <Playground cohort={cohort}/>
    </div>
  )
}

//only once per app usually. It is your resuable props holder
render(
  <App cohort='37' instructor= 'Gabe' happy={true} week='2'/>, // element(s)
  document.querySelector('#root')
)
