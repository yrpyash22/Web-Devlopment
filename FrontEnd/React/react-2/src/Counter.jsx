import { useState, useEffect} from "react";

export default function Counter() {
    // let [count, setCount] = useState(0);
    // let inCount = () => {
    //     setCount((currCount) => currCount+1);
    // }
    // useEffect(function printSomething() {
    //         console.log("This is side effect")
    //     }
    // )
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let inCountx = () => {
        setCountx((currCount) =>  currCount + 1);
    }
    let inCounty = () => {
        setCounty((currCount) =>  currCount + 1);
    }
    useEffect(function printSomething() {
        console.log("This is side effect");
    }, [countx]); // here useEffect only change when countx(stateVariable) rerenders
    // for doing only one time changes do not pass any dependencies
    return (
        <div>
            <h3>CountX = {countx}</h3>
            <button onClick={inCountx}>+1</button>
            <h3>CountY = {county}</h3>
            <button onClick={inCounty}>+1</button>
        </div>
    )
}