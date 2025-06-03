import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState({blue: 0, yellow: 0, green : 0, red: 0}) //Initialized all the variables inside a object 
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () => {
        // moves.blue += 1;
        // console.log(moves);
        setMoves((prevMoves) => {
            return {...prevMoves, blue : prevMoves.blue + 1}
        }); //Using spreading to make the changes detectable

        setArr((prevMoves) => {
            return [...prevMoves, "blue moves"];
        })
    }

    let updateYellow = () => {
        // moves.yellow += 1;
        // console.log(moves);
        setMoves((prevMoves) => {
            return {...prevMoves, yellow : prevMoves.yellow + 1}
        }); //Using spreading to make the changes detectable
    }

    let updateRed = () => {
        // moves.red += 1;
        // console.log(moves);
        setMoves((prevMoves) => {
            return {...prevMoves, red : prevMoves.red + 1}
        }); //Using spreading to make the changes detectable
    }

    let updateGreen = () => {
        // moves.green += 1;
        // console.log(moves);
        setMoves((prevMoves) => {
            return {...prevMoves, green : prevMoves.green + 1}
        }); //Using spreading to make the changes detectable
    }
    return (
        <div>
            <h1>Game begins</h1>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style = {{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style = {{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style = {{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style = {{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}