import logo from './logo.png';
import './App.css';
import React, {useState, useEffect} from 'react';
import Sort from "./components/sort/sort.jsx"
import Filter from "./components/filter/filter.jsx"
import Tickets from "./components/tickets/tickets.jsx"
import Loading from './components/loading/loading.jsx';

import {getrequest} from './helpers/index'

function App() {
  const [state, setState] = useState('sort_by_price');
  const menuState = [
    {
      name : "Без пересадок",
      value : "0"
    },
    {
      name : "1 пересадка",
      value : "1"
    },
    {
      name : "2 пересадки",
      value : "2"
    },
    {
      name : "3 пересадки",
      value : "3"
    }
  ]

  const [tickets, setTickets] = useState([]);
  const [filterState, setFilterState] = useState([])
  const [loading, setLoading] = useState(false);

  const [test, setTest] = useState(false); 

  useEffect(() => {
    getrequest(setTickets, setLoading)
  }, [])

  useEffect(() => {
    loading && sortTickets(state)
    setTest(!test) //!!!!!!
}, [state, loading])

  useEffect(() => {
    if(filterState.length === 4){
      setFilterState([])
    }
  }, [filterState])

  const checkboxHandler = ({ target: { checked, value } }) => {
    setFilterState((!filterState.includes(value) && checked)
      ? [ ...filterState, value ]
      : filterState.filter(n => n !== value)
    )
  }

  const  sortTickets = (data) => {
    if(data === "sort_by_price") setTickets(() => tickets.sort((a, b) => a.price > b.price ? 1 : -1))
    if(data === "sort_by_time") setTickets(() => tickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration  ? 1 : -1))
  }

  const filterCheck = (data, el) => {
    const temp = el.segments[0].stops.length.toString();

    if(filterState.length === 0 || data.includes(temp)){
      return  true
    }

    return false
  }

  const filter = tickets.filter(n => filterCheck(filterState, n))

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="content">
        <div className="content__left">
          <Filter filterState={filterState} onChange={checkboxHandler} sizes={menuState}></Filter>
        </div>
        <div className="content__right">
          <Sort buttonHandler={setState} state={state}></Sort>
          {!loading ? <Loading /> : <Tickets tickets={filter} />}
        </div>
      </div>
    </div>
  );
}

export default App;

