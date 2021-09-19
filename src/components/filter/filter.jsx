import React  from 'react';
import style from './filter.module.css';

function Filter({ filterState, onChange, sizes }){
    return (
        <div className={style.wapper}>
            <div className={style.content}>
                <div className={style.main__text}>
                    <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
                </div>
                <div className={style.buttons}>
                    <form>
                    <div className={style.checkbox}>
                                 <label className={style.container}>
                                    <input  className={style.checkbox} type="checkbox" checked={!filterState.length} onChange={onChange}/>
                                    <span className={style.checkmark}></span>
                                   <p>Все</p></label>
                                </div>
                        {sizes.map( (n, index) => {
                            return <div key={index} className={style.checkbox}>
                                 <label className={style.container}>
                                    <input  className={style.checkbox} type="checkbox" value={n.value} checked={filterState.includes(n.value)} onChange={onChange}/>
                                    <span className={style.checkmark}></span>
                                   <p>{n.name}</p></label>
                                </div>
                        })}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Filter;