import React, {useState, useEffect} from 'react';
import style from './filter.module.css';

function Filter({ value, onChange, sizes }){

    return (
        <div className={style.wapper}>
            <div className={style.content}>
                <div className={style.main__text}>
                    <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
                </div>
                <div className={style.buttons}>
                    <form>
                        {sizes.map( (n, index) => {
                            return <div key={index} className={style.checkbox}>
                                 <label className={style.container}>
                                    <input  className={style.checkbox} type="checkbox" value={n} checked={value.includes(n)} onChange={onChange}/>
                                    <span className={style.checkmark}></span>
                                   <p>{n}</p></label>
                                </div>
                        })}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Filter;