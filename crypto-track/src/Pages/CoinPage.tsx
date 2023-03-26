import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CoinGraph from '../Components/Coins/CoinGraph'

type CoinData = {
    image: string
    name: string
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
            console.log(data,'ererere')
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
            coins.name
        }

        </div>
        <CoinGraph />
        
    </div>
  )
}

export default CoinPage