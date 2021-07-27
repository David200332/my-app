import React, {useState, useEffect} from 'react';
import style from './sort.module.css';

function Sort({data}){
    const {
        buttonHandler,
        state
    } = data
    
    const active = style.active;
    function onSubmit(e){
        e.preventDefault();
    }

    return (
        <div className={style.wapper}>
            <form className={style.sort__button} onSubmit={onSubmit}>
                <button type="submit" name="btn1" className={(state === 'sort_by_price') ? active : null} onClick={() => {buttonHandler('sort_by_price'); }}>Самые дешовыe</button>
                <button type="submit" name="btn2" className={(state === 'sort_by_time') ? active : null}onClick={() => {buttonHandler('sort_by_time')}}>Самые быстрые</button>
            </form>
        </div>
        
    )
}

export default Sort; 