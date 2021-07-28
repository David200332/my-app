import React from 'react'
import style from './ticket.module.css'
import logo from './images/s7AirLines.png'

function Ticket({el}){

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        let m = Math.floor(seconds % 3600 / 60);
        let s = Math.floor(seconds % 60);

        let mDisplay = m > 0 ? m + (m === 1 ? "ч " : "ч ") : "";
        let sDisplay = s > 0 ? s + (s === 1 ? "м " : "м ") : "";
        return  mDisplay + sDisplay;
    }


    return (
                <div className={style.wapper}>
                    <div className={style.content}>
                    <div className={style.upper_content}>
                        <div className={style.price}>
                            <p>{el.price + " Р"}</p>
                        </div>
                        <div className={style.carrier}>
                            <img src={logo} alt="logo"></img>
                        </div>
                    </div>
                    <div className={style.lower_content}>
                        <div className={style.constent_segment_1}>
                            <div className={style.content_date}>
                                <p>{el.segments[0].origin + ' - ' + el.segments[0].destination}</p>
                                <p>{el.segments[0].date.split('T')[0]}</p>
                            </div>
                            <div className={style.content_date}>
                                <p>В пути</p>
                                <p>{secondsToDhms(el.segments[0].duration)}</p>
                            </div>
                            <div className={style.content_date}>
                                <p>{el.segments[0].stops.length} пересадки</p>
                                <p> { el.segments[0].stops.toString()} </p>
                            </div>
                        </div>

                        <div className={style.constent_segment_2}>
                            <div className={style.content_date}>
                                <p>{el.segments[1].origin + ' - ' + el.segments[1].destination}</p>
                                <p>{el.segments[1].date.split('T')[0]}</p>
                            </div>
                            <div className={style.content_date}>
                                <p>В пути</p>
                                <p>{secondsToDhms(el.segments[1].duration)}</p>
                            </div>
                            <div className={style.content_date}>
                                <p>{el.segments[1].stops.length} пересадки</p>
                                <p> { el.segments[1].stops.toString()} </p>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
    )
}

export default Ticket