import axios from 'axios'
import React ,{useState} from 'react'
import Chart from './Chart'

const Select = ({country , setAlldata}) => {
    //  console.log(country[0])


const [coun, setCoun] = useState("")
const [show, setShow] = useState(false)
const [countryData, setCountryData] = useState([])


const inputHandel= async (e)=>{
    
    let con=e.target.value
    if(con === 'global')
    {
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
        setCoun("")
        setShow(false)
    }
    else{

    
    setCoun(e.target.value)
     setShow(true)

    const {data} =await axios.get(`https://covid19.mathdro.id/api/countries/${con}`)
    // console.log(data)
    const alldat={
        confirmed:data.confirmed,
        recovered:data.recovered,
        deaths:data.deaths,
        lastUpdate:data.lastUpdate
      }
      setCountryData(alldat)
      setAlldata(alldat)
    }
    
}
// console.log(countryData)

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-12 mx-auto mb-4">
                    <form >
                    <div class="form-group">
                       
                        <select class="form-control" id="exampleFormControlSelect1" onChange={inputHandel}>
                        <option value="global">Select Your Country</option>
                       
                        {
                            country.map((val,ind)=>{
                               
                                return (
                                    <>
                                    <option value={val.iso2}>{val.name}</option>
                                     
                        

                                    </>
                                )
                            })
                        }
                       
                        </select>
                    </div>
                    </form>
                    {show && (
                        <>
                                <Chart countryData={countryData} country={coun} />
                        </>
                    )}
                     
                   
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Select
