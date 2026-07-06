import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import { sum } from "./helper";



function App() {
  let winCondition = (ticket, n) => {
    return sum(ticket, n) === 15;
  }
  return (
    <>
      {/* <h1>States in React</h1>
        <LikeButton />
        <Counter />
        <LudoBoard />
        <TodoList /> */}
        <Lottery n={5}  winConditon={winCondition}/>
        {/* <Ticket ticket={[0,1,2]}/> */}
      </>
  )
}

export default App
