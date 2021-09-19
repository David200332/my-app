import axios from 'axios';

export function getrequest(setTickets, setLoading){
    try{    
        setTimeout( async () => {
            const res =  await axios.get(`https://front-test.beta.aviasales.ru/search`)
            const res_second = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${res.data.searchId}`).catch(err => {
              if(err.response.status === 500){
                getrequest()
              }
              throw err
            })
            setTickets(res_second.data.tickets.splice(0, 10))
            setLoading(true)
        }, 3000)
    } catch(err){
      console.log(err)
    }
  }