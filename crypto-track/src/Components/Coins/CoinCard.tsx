import React from 'react'

type CoinCardProps = {
    id: string
    image: string
    symbol: string
    name: string
    current_price: number
    price_change_percentage_24h: number
    market_cap: number
}

const CoinCard = ({image,symbol,name,current_price,price_change_percentage_24h,market_cap}: CoinCardProps) => {
  return (
    <div>
        test
    </div>
  )
}

export default CoinCard