import React from 'react'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div className='bg-banner'>
      <div className='max-w-full h-[400px] flex flex-col pt-6'>
      <div className=' flex flex-col justify-around items-center py-6'>
        <span className='text-6xl mb-5 text-center'>Crypto Tracker</span>
        <span className='text-sm text-center text-[#5A5A5A]'>Get All The Info Regarding Your Favorite Crypto Currency</span>
        <Carousel/>
      </div>
      </div>
    </div>
  )
}

export default Banner
