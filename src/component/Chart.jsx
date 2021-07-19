
import React from 'react'
import {  Bar } from 'react-chartjs-2';

const Chart = ({countryData,country}) => {

    // const [dailyData, setDailyData] = useState([]);

//   useEffect(() => {
//     const fetchMyAPI = async () => {
//       const {data} = await axios.get(`https://api.covid19india.org/data.json`)

//       setDailyData(data.statewise[0]);

//     };

//     fetchMyAPI();
//   }, []);

    const barChart = (
        countryData.confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['#97a61a', '#fe9f06', '#b30e12'],
                  data: [countryData.confirmed.value, countryData.recovered.value, countryData.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );

    //   const lineChart = (
    //     dailyData ? (
    //         <Bar
    //         data={{
    //           labels: ['Infected', 'Recovered', 'Deaths'],
    //           datasets: [
    //             {
    //               label: 'People',
    //               backgroundColor: ['#97a61a', '#fe9f06', '#b30e12'],
    //               data: [dailyData.confirmed, dailyData.recovered, dailyData.deaths],
    //             },
    //           ],
    //         }}
    //         options={{
    //           legend: { display: false },
    //           title: { display: true, text: `Current state in ${country}` },
    //         }}
    //       />
         
    //     ) : null
    //   );

    //   console.log(dailyData.lastupdatedtime)


      
    

    return (
        <>
        {
             barChart 
        }
            
        </>
    )
}

export default Chart
