import React from 'react'
import CoinCard from './CoinCard'
import { CoinData } from './Coins'


type CoinListProps = {
    coins: CoinData[]
}


const CoinsList = ({ coins }: CoinListProps) => {
  return (
    <div>
        {
            coins.map(coin => (
                <CoinCard key={coin.id} id={coin.id} image={coin.image} symbol={coin.symbol} name={coin.name} current_price={coin.current_price} price_change_percentage_24h={coin.price_change_percentage_24h} market_cap={coin.market_cap} />
            ))
        }
    </div>
  )
}

export default CoinsList

