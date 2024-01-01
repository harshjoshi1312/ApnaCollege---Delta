import { useState } from "react";
import "./Lottey.css";
import { genTicket,sum } from "./helper";

export default function Lottey() {
    
    
    
    let[ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    
    let buyTicket = () =>{
        setTicket (genTicket(3));
    }
    
    return(
        <div>
            <h1> hello its lottry game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning && "Cngratulations, you won!"}</h3>
            <button onClick={buyTicket}>Buy new ticket</button>
        </div>
    );
}
