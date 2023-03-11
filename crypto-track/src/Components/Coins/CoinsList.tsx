import React from 'react'
import CoinCard from './CoinCard'
import { CoinData } from './Coins'

type CoinListProps = {
  coins: CoinData[]
}

const CoinsList = ({ coins }: CoinListProps) => {
  return (
    <div className='w-[90%] mt-5'>
      {
        coins.map(coin => (
          <CoinCard key={coin.id} coin={coin} />
        ))
      }
    </div>
  )
}

export default CoinsList


