import React , {useState,useEffect} from 'react'
import Card from './component/Card'
import Select from './component/Select'

import './App.css'
import axios from 'axios'


const App = () => {
  const [alldata, setAlldata] = useState([])
  const [country,setCountry]=useState([])
 
  const getAllData= async ()=>{
    const {data}= await axios.get(`https://covid19.mathdro.id/api`)
    // console.log(data)
    const alldat={
      confirmed:data.confirmed,
      recovered:data.recovered,
      deaths:data.deaths,
      lastUpdate:data.lastUpdate
    }
    // console.log(alldat)
    setAlldata(alldat)




  }


  const getCountry= async ()=>{
        const {data} = await axios.get(`https://covid19.mathdro.id/api/countries`)
        
        setCountry(data.countries)
  }

  useEffect(() => {
    getAllData()
     getCountry()
  }, [])
    //  console.log(country)

  return (
    <>
    

   <Card  alldata={alldata}  />
   <Select country={country} setAlldata={setAlldata} />
   

      
    </>
  )
}

export default App
