import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CoinGraph from '../Components/Coins/CoinGraph'

export type CoinData = {
    image: {
        large: string
    }
    description: {
        en: string
    }
    
    market_data: {
        current_price: {
            usd: number
        }
        market_cap: {
            usd: number
        }
    }

    market_cap_rank: number
    name: string
    symbol: string
    id: number
}

const CoinPage = () => {

    const { id } = useParams()
    const [coins, setCoins] = useState<CoinData | null>(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            const data = await response.json()
            setCoins(data)
          } catch (err) {
            console.log(err)
          }
        }
        fetchData()
      },[])

      
  return (
    <div className='flex text-white-500 xl:flex-col'>
        <div className='flex flex-col items-center border-r-2 border-gray-400 w-[30%] h-[90vh] mt-6 xl:w-full xl:h-full'>
            {
                <div className='w-full flex flex-col justify-center items-center'>
                    <img className='h-48 mb-5' src={coins?.image.large} />
                    <h2 className='text-6xl mb-5 font-bold'>{coins?.name}</h2>
                    <p className='w-11/12 text-justify text-lg xl:flex xl:items-center xl:justify-center '>{coins?.description.en.split('.')[0]}.</p>
                    <div className='w-11/12 mt-5 xl:flex xl:flex-col xl:items-center xl:justify-center'>
                        <h4 className='mb-3 text-2xl font-bold'>Rank: {coins?.market_cap_rank}</h4>
                        <h4 className='mb-3 text-2xl font-bold'>Current Price: ${coins?.market_data.current_price.usd.toLocaleString()}</h4>
                        <h4 className='mb-3 text-2xl font-bold'>Market Cap: ${coins?.market_data.market_cap.usd.toLocaleString()}</h4>
                    </div>
                </div>
        
            }
        </div>
        {coins ? (
        <CoinGraph coins={coins} />
      ) : (
        null
      )}
        
    </div>
  )
}

export default CoinPage