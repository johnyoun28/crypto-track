import React from 'react'
import { Line } from 'react-chartjs-2';
import { CoinData } from '../../Pages/CoinPage';



type CoinGraphProps = {
    coins: CoinData | undefined
}

const CoinGraph = ({ coins }: CoinGraphProps ) => {
    
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Price",
            data: [50, 60, 70, 80, 90, 100],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true,
          },
        },
      };
      

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}

export default CoinGraph

