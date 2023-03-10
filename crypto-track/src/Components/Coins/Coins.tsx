import React, {useState, useEffect} from 'react'
import CoinsList from './CoinsList'

export type CoinData = {
  id: string
  image: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
}


const Coins = () => {
  const [coins, setCoins] = useState<CoinData[]>([])
  const [search, setSearch] = useState('')

  const changeHandler = (e: any) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        const data = await response.json()
        setCoins(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  },[])

  
  return (
    <div className="flex flex-col items-center m-5">
      <span className="text-2xl font-bold text-center">Cryptocurrency Prices by Market Cap</span>
      <input
       className="w-[80%] mt-4 text-black" 
       type="text" 
       onChange={changeHandler}
       placeholder="Search For a Crypto Currency.." />
       <CoinsList coins={coins} />
    </div>
  )
}

export default Coins


