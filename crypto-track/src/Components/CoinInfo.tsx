import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

const CoinInfo = () => {

    const { id } = useParams()
    const [coins, setCoins] = useState()

    const fetchData = async (id) => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await response.json()
        console.log(data,'lmao')
    }

  return (
    <div className='text-white-500'>
        yoooooo
    
        
    </div>
  )
}

export default CoinInfo