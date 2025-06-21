import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TicketNum from "./TicketNum";
import TodoList from "./TodoList";
import Ticket from "./Ticket";
import {sum} from "./Helper";
import Forms from "./Forms";

function App() {

  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }
  return (
    <>
      {/* <Lottery n={3} winCondition = {winCondition}></Lottery> */}
      <Forms/>
    </>
  );
}

export default App;
