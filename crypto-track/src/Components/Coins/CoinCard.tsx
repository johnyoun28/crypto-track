import React from 'react'

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
    <table className="table-auto text-left w-[100%]">
  <tbody>
    <tr>
      <td>{coin.name}</td>
      <td className='text-left'>{coin.current_price}</td>
      <td>1961</td>
    </tr>
  </tbody>
</table>


)
}

    export default CoinCard
    