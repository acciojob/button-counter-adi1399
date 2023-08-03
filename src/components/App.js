
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [Count, setCount]= useState(0);
  return (
    <div>
        /* Do not remove the main div */
         <p>Button clicked {Count} times</p>
         <button onClick={()=> setCount(Count+1)}>Click Me</button>
        
    </div>
  )
}

export default App
