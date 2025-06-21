import "./App.css";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TicketNum from "./TicketNum";
import TodoList from "./TodoList";
import Ticket from "./Ticket";

function App() {
  return (
    <>
      <Lottery n={3} winningSum = {15}></Lottery>
    </>
  );
}

export default App;
