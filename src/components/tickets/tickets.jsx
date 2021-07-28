import style from './tickets.module.css';
import Ticket from './ticket/ticket.jsx'

import { v4 as uuidv4 } from 'uuid';

function Tickets({tickets}){

    function renderTickets(){  
        return tickets.map((el) => (
            <div key={uuidv4()}>
                <Ticket el={el}></Ticket>
            </div>
        ))
    }

    return (
        <div className={style.size}>
            {renderTickets()}
        </div>
    )
}

export default Tickets;