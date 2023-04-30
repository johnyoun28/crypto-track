import React, {useState, useEffect} from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'


    type CarouselTrend = {
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
          } catch (err) {
            console.log(err)
          }
        }
        fetchTrend()
      },[])

  const items = trending.map(trend => {
    const change = trend.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coins/${trend.id}`}>
        <div className='flex flex-col items-center'>
        <img className='h-[80px] mb-2' src={trend.image}/>
        <span > {trend.symbol.toUpperCase()}&nbsp; <span className={`${parseFloat(trend.price_change_percentage_24h.toFixed(2)) > 0 ? "+" && "text-green-500" : "text-red-500" }`}>
          {change && '+'}
          {trend.price_change_percentage_24h.toFixed(2)}% </span>
        </span>
        <span className='text-xl'>${trend.current_price.toLocaleString()}</span>
      </div>
      </Link>
    )
  })

  return (
    <div className='h-[50%] w-4/5 flex items-center mt-12'>
        <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        items={items}
        autoPlay
        responsive={{
          0: { items: 2 },
          512: { items: 4 },
          
        }}
    />
    </div>
  )
}

export default Carousel