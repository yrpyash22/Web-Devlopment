import TicketNum from "./TicketNum"
import "./Ticket.css"

export default function Ticket({ticket}) {
    return (
        <div className="ticket">
            <h3>Your Ticket is</h3>
            {ticket.map((num, idx) => (
                <TicketNum num = {num} key={idx}/>
            ))}
        </div>
    )
}