// import { useState } from "react";

// export default function Lottery() {
//   let [number, setNumber] = useState(0);
//   let winner = 15;
//   let [userNumber, setUserNumber] = useState(0);
//   let [message, setMessage] = useState("");

//   function sumOfDigit() {
//     let num = Math.floor(Math.random() * 1000) + 1;
//     console.log(num);
//     setUserNumber(num);
//     return num
//       .toString()
//       .split("")
//       .reduce((sum, digit) => sum + parseInt(digit), 0);
//   }

//   let generateNumber = () => {

//     let num = sumOfDigit();
//     console.log("sum = " + num);
//     if (num == winner) {
//       setMessage("'Congratulations, you won!' ");
//       return true;
//     } else {
//         setMessage("");
//       return false;
//     }
//   };

//   return (
//     <div>
//       <h1>Lottery {message}</h1>
//       <h2>Lottery ticket = {userNumber}</h2>
//       <button onClick={generateNumber}>Get New Ticket</button>
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";


export default function Lottery({n = 3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  }
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <br></br>
      <button onClick={buyTicket}>Buy new ticket</button>
      <h3> {isWinning && "Congratulations, you won !!"}</h3>
    </div>
  );
}
