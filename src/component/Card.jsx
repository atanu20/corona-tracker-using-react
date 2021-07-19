import React from 'react'
import CountUp from 'react-countup';
import '../App.css'

const Card = ({alldata}) => {
    // console.log(alldata)
    // if(!alldata.length)
    // {
    //     return <h2>no data</h2>
    // }
    return (
        <>
        <div className="home">
        <div className="container">
            <h1 className="text-center p-2">Global Data</h1>
            <div className="row">
               <div className="col-10 mx-auto">
                   <div className="row">
                       
                               <div className="col-lg-4 col-md-6 col-12 mb-3">
                                        <div className="card p-3" style={{backgroundColor:'#97a61a'}}>
                                            <h4>Infected</h4>
                                            {/* <h2>{alldata.confirmed.value}</h2> */}
                                            <h2><CountUp start={0} end={alldata.confirmed.value} duration={2.75} separator="," /></h2>
                                            <p>{new Date (alldata.lastUpdate).toDateString()}</p>
                                            <p>Number of active cases from COVID-19.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mb-3" >
                                        <div className="card p-3" style={{backgroundColor:'#fe9f06'}}>
                                            <h4>Recovered</h4>
                                            {/* <h2>{alldata.recovered.value}</h2> */}
                                            <h2><CountUp start={0} end={alldata.recovered.value} duration={2.75} separator="," /></h2>
                                            <p>{new Date (alldata.lastUpdate).toDateString()}</p>
                                            <p>Number of recoveries from COVID-19.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12 mb-3" >
                                        <div className="card p-3" style={{backgroundColor:'#b30e12'}}>
                                            <h4>Deaths</h4>
                                            {/* <h2>{alldata.deaths.value}</h2> */}
                                            <h2><CountUp start={0} end={alldata.deaths.value} duration={2.75} separator="," /></h2>
                                            <p>{new Date (alldata.lastUpdate).toDateString()}</p>
                                            <p>Number of deaths cases from COVID-19.</p>
                                        </div>
                                    </div>
                             
                      
                       
                  
                   </div>
               </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Card
