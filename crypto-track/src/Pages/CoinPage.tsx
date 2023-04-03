import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CoinGraph from '../Components/Coins/CoinGraph'

type CoinData = {
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
}

const CoinPage = () => {

    const { id } = useParams()
    const [coins, setCoins] = useState<CoinData>()

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
    <div className='flex items-center text-white-500'>
        <div className='flex flex-col border-r-2 w-[30%] mt-6'>
            {
                <div className='w-full flex flex-col justify-center items-center'>
                    <img className='h-48 mb-5' src={coins?.image.large} />
                    <h2 className='text-5xl mb-5 font-bold'>{coins?.name}</h2>
                    <p className='w-11/12 '>{coins?.description.en.split('.')[0]}.</p>
                    <div className='w-11/12 mt-5'>
                        <h4>RANK: {coins?.market_cap_rank}</h4>
                        <h4>CURRENT PRICE: ${coins?.market_data.current_price.usd.toLocaleString()}</h4>
                        <h4>MARKET CAP: ${coins?.market_data.market_cap.usd.toLocaleString()}</h4>
                    </div>
                </div>
        
            }
        </div>
        <CoinGraph />
        
    </div>
  )
}

export default CoinPage