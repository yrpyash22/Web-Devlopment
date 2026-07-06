// useState() - let you add a state variable to your component
// const [state, setState] = useState(initialState)
// setState - updater Function
// in useState() fuction we can pass another function as parameter

import { useState } from "react";

function init() {
    return Math.random()*10;
}

export default function Counter() {
   // const [stateVariable, setStateVariable] = useState(0);

    let [count, setCount] = useState(init); // here init is passed as a reference
    console.log("componenet was re redender"); // it will not always re-rendered when the value is not changing
    //let count = 0;
    let incCount = () => {
        // setCount(count+1);
        // setCount(count+1); it will only increase count to +1
        // setCount((currCount) => {
        //    return currCount+1;
        // })
        // setCount((currCount) => {
        //     return currCount+1;
        // }) - now this will increase count to + 2
        // setCount(25); - it will always remains 25 (second case)
        setCount(count + 1);
    };
    return (
        <>
            <h3>Count = {count} </h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    );
}