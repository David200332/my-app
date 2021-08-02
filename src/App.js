import logo from './logo.png';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Sort from "./components/sort/sort.jsx"
import Filter from "./components/filter/filter.jsx"
import Tickets from "./components/tickets/tickets.jsx"
import Loading from './components/loading/loading.jsx';

function App() {
  const [state, setState] = useState('sort_by_price');
  const menuState = ["Все",  "Без пересадок" ,  "1 пересадка", "2 пересадки", "3 пересадки"];
  const [filterState, setFilterState] = useState([])
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState(false); 

  useEffect(() => {
    getrequest()
  }, [])

  useEffect(() => {
    loading && sortTickets(state)
    setTest(!test)
}, [state, loading])

  useEffect(() => {
    if(filterState.length === 0 || filterState.length === 4){
      setFilterState(["Все"])
    }
      
    if(filterState.includes("Все") && filterState.length > 1){
      let index = filterState.indexOf("Все")
      setFilterState((prev) => prev.splice(index, 1))
    }

  }, [filterState])

  const checkboxHandler = ({ target: { checked, value } }) => {
    setFilterState((!filterState.includes(value) && checked)
      ? [ ...filterState, value ]
      : filterState.filter(n => n !== value)
    );
  };

  function getrequest(){
    try{    
        setTimeout( async () => {
            const res =  await axios.get(`https://front-test.beta.aviasales.ru/search`)
            const res_second = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${res.data.searchId}`) 
            setTickets(res_second.data.tickets.splice(0, 10))
            setLoading(true)
        }, 6000)
    } catch(e){
        console.log(e)
    }
  }

  function sortTickets(data){
    if(data === "sort_by_price") setTickets(() => tickets.sort((a, b) => a.price > b.price ? 1 : -1))
    if(data === "sort_by_time") setTickets(() => tickets.sort((a, b) => a.segments[0].duration > b.segments[0].duration  ? 1 : -1))
  }

   const filter = tickets.filter(n => filterCheck(filterState, n))

  function filterCheck(data, el){
    const temp = el.segments[0].stops.length;

    if(data.includes("Все")){
      return  true
    }
    
    if(data.includes("Без пересадок") && temp === 0){
      return  true
    }

    if(data.includes("1 пересадка") && temp === 1){
      return true
    }

    if(data.includes("2 пересадки") && temp === 2){
      return true
    }

    if(data.includes("3 пересадки") && temp === 3){
      return true
    }

    return false

  }

  function buttonHandler(data){
    setState(data)
  }

  const data = {
    buttonHandler,
    state
  }

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div className="content">
        <div className="content__left">
          <Filter value={filterState} onChange={checkboxHandler} sizes={menuState}></Filter>
        </div>
        <div className="content__right">
          <Sort data={data}></Sort>
          {!loading ? <Loading /> : <Tickets tickets={filter} />}
        </div>
      </div>
    </div>
  );
}

export default App;
