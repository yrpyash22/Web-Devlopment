import { useState } from "react"

export default function LudoBoard() {
    // if we want to create count for all the colors
    // we will write 
    // let [blueMove, setBlueMove] = useState(0);
    // let [redMove, setRedMove] = useState(0);
    // let [yellowMove, setYellowMove] = useState(0);
    // let [greenMove, setGreenMove] = useState(0);

    // but there is another way also 
    // use of OBJECT with state
    let[move, setMove] = useState({blue: 0, red:0, yellow:0, green:0});
    let [arr, setArr] = useState(["no moves "]);
    let updateBlue = () => {
        //move.blue += 1; //  this line doesnot reflect changes in rerender
        // we will use spread - to make copy of object
        // setMove({...move, blue: move.blue + 1}); // ... here means spread
        // we can also do this using callbacks
        setMove((prevMove) => {
            return {...prevMove, blue: prevMove.blue + 1};
        });
        
        setArr((prevArr) => {
            return [...prevArr, "blue move "]
        })
        console.log(arr);
    }
    let updateYellow = () => {
        setMove((prevMove) => {
            return {...prevMove, yellow: prevMove.yellow + 1};
        })
    }
    let updateRed = () => {
        setMove((prevMove) => {
            return {...prevMove, red: prevMove.red + 1};
        })
    }
    let updateGreen = () => {
        setMove((prevMove) => {
            return {...prevMove, green: prevMove.green + 1};
        })
    }

    return (
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Moves = {move.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Red Moves = {move.red} </p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>Yellow Moves = {move.yellow} </p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {move.green} </p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}