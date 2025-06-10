import { useState } from "react";

export default function Lottery() {
  let [number, setNumber] = useState(0);
  let winner = 15;
  let [userNumber, setUserNumber] = useState(0);
  let [message, setMessage] = useState("");

  function sumOfDigit() {
    let num = Math.floor(Math.random() * 1000) + 1;
    console.log(num);
    setUserNumber(num);
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  let generateNumber = () => {
    
    let num = sumOfDigit();
    console.log("sum = " + num);
    if (num == winner) {
      setMessage("'Congratulations, you won!' ");
      return true;
    } else {
        setMessage("");
      return false;
    }
  };

  return (
    <div>
      <h1>Lottery {message}</h1>
      <h2>Lottery ticket = {userNumber}</h2>
      <button onClick={generateNumber}>Get New Ticket</button>
    </div>
  );
}
