import { useState } from "react";
import "./Lottery.css";
import { genTicket, checkWin} from "./helper";
import Ticket from "./Ticket";

// Lifting state up - design pattern code 
// Component type - Logical, and Presentational
// Presentational - Dumb, for UI, no state , can have props
// Logical - Smart, state(change with logic)
// export default function Lottery() {
//     let [ticket, setTicket] = useState(genTicket(3));

//     let buyTicket = () => {
//         setTicket(genTicket(3));
//     }

//     let win = checkWin(ticket, 3);

//     return (
//         <> 
//         <div>
//             <h1>Lottery Game</h1>
//             <h2 style={win ? {backgroundColor: "green"} : {}}>{win ? "You Won the Lottery" : ""}</h2>
//             <div className="ticket">
//                 <span className="t1">{ticket[0]}</span>
//                 <span className="t2">{ticket[1]}</span>
//                 <span className="t3">{ticket[2]}</span>
//             </div>
//             <button className="gen-ticket" onClick={buyTicket}>Buy a New Ticket</button>
//         </div>
//         </>
//     )
// }
export default function Lottery({n, winConditon}) {
        let [ticket, setTicket] = useState(genTicket(n));
    
        let buyTicket = () => {
            setTicket(genTicket(n));
        }
        let win = winConditon(ticket, n);
        //let win = checkWin(ticket, n, winningSum);
    
        return (
            <> 
            <div>
                <h1>Lottery Game !</h1>
                <h2 style={win ? {backgroundColor: "green", margin: "100px"} : {}}>{win ? "You Won the Lottery" : ""}</h2>
                <Ticket ticket={ticket}/>
                <button className="gen-ticket" onClick={buyTicket}>Buy a New Ticket</button>
            </div>
            </>
        )
    }