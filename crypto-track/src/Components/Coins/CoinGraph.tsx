import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { CoinData } from '../../Pages/CoinPage';
import Chart, { CategoryScale } from 'chart.js/auto';
Chart.register(CategoryScale);


type CoinGraphIdProps = {
    coins: CoinData
}


const CoinGraph = ({ coins }: CoinGraphIdProps ) => {

    const [chartData, setChartData] = useState([])
    const [days, setDays] = useState(1)

    const fetchGraphData = async () => {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coins.id}/market_chart?vs_currency=usd&days=${days}`)
        const data = await res.json()
        setChartData(data.prices)
    }

    useEffect(() => {
        fetchGraphData()
    }, [days])


  return (
    <div className='w-[75%] m-5 flex items-center flex-col justify-center'>
      
      <Line
              data={{
                labels: chartData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: chartData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in USD`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
        <div className='flex justify-evenly w-full'>
            <button className='p-3 rounded bg-yellow-300 text-black w-[23%]'>24 Hours</button>
            <button className='p-3 rounded bg-yellow-300 text-black w-[23%]'>30 Days</button>
            <button className='p-3 rounded bg-yellow-300 text-black w-[23%]'>3 Months</button>
            <button className='p-3 rounded bg-yellow-300 text-black w-[23%]'>1 Year</button>
        </div>
    </div>
  )
}

export default CoinGraph

