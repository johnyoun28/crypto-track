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
    return (
      <div className='flex flex-col items-center'>
        <img className='h-[60px]' src={trend.image}/>
        <span> {trend.symbol} </span>
      </div>
    )
  })

  return (
    <div className='h-[50%] max-w-[50%] flex items-center mt-8'>
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