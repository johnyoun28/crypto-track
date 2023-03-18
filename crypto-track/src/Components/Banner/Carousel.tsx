import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

export type CarouselTrend = {
    id: string
    image: string
    symbol: string
    price_change_percentage_24h: number
    current_price: number
}


const Carousel = () => {

    const [trending, setTrending] = useState<CarouselTrend[]>([])

    useEffect(() => {
        const fetchTrend = async () => {
          try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
            const data = await response.json()
            setTrending(data)
            console.log(data,'here')
          } catch (err) {
            console.log(err)
          }
        }
        fetchTrend()
      },[])

  const items = trending.map(trend => {
    return (
      <div className='flex flex-col items-center'>
        <img className='h-[50px]' src={trend.image}/>
        <span> {trend.symbol} </span>
      </div>
    )
  })
    

  return (
    <div className='h-[50px] flex flex-row items-center'>
        <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
    />
    </div>
  )
}

export default Carousel