import React, {useState, useEffect, ChangeEvent} from 'react'
import CoinsList from './CoinsList'

export type CoinData = {
  id?: string
  image: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  market_cap_rank: number
}


const Coins = () => {
  const [coins, setCoins] = useState<CoinData[]>([])
  const [search, setSearch] = useState('')

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

  const filtered = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase()) 
    || coin.symbol.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <div className="flex flex-col items-center m-5 w-full">
      <span className="text-4xl font-bold text-center">Cryptocurrency Prices by Market Cap</span>
      <input
       className="w-[90%] mt-4 text-white bg-[#14161a] outline-white rounded" 
       type="text" 
       onChange={changeHandler}
       placeholder="Search For a Crypto Currency.." />
       <CoinsList coins={filtered} />
    </div>
  )
}

export default Coins


