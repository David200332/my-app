import React  from 'react';
import style from './sort.module.css';

function Sort({buttonHandler, state}){

    function onSubmit(e){
        e.preventDefault();
    }

    return (
        <div className={style.wapper}>
            <form className={style.sort__button} onSubmit={onSubmit}>
                <button type="submit" name="btn1" className={(state === 'sort_by_price') ? style.active : null } onClick={() => {buttonHandler('sort_by_price'); }}>Самые дешовыe</button>
                <button type="submit" name="btn2" className={(state === 'sort_by_time') ? style.active : null}onClick={() => {buttonHandler('sort_by_time')}}>Самые быстрые</button>
            </form>
        </div>
        
    )
}

export default Sort; 