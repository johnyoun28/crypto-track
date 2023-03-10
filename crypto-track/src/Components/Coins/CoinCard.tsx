import React from 'react'
import CoinsRow from './CoinsRow'

type CoinCardProps = {
    coin: {
    id: string
    image: string
    symbol: string
    name: string
    current_price: number
    price_change_percentage_24h: number
    market_cap: number
  }
}

const CoinCard = ({ coin }: CoinCardProps) => {
  return (

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={coin.image} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-base font-semibold">{coin.symbol.toUpperCase()}</div>
                        <div className="font-normal text-gray-500">{coin.name}</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    ${coin.current_price.toLocaleString()}
                </td>
                <td className={`${parseFloat(coin.price_change_percentage_24h.toFixed(2)) > 0 ? "text-green-500" : "text-red-500" } px-6 py-4 `} >
                {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-6 py-4">
                    ${coin.market_cap.toLocaleString()}
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

    export default CoinCard
    