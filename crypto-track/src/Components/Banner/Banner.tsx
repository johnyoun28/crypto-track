import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center flex-col relative w-full h-full'>
      <img
        src='/banner.jpeg'
        alt='banner'
        className='object-cover h-[400px] w-full'
      />
      <div className='absolute flex flex-col justify-around items-center py-6'>
        <span className='text-6xl mb-5'>Crypto Tracker</span>
        <span className='text-sm'>Get All The Info Regarding Your Favorite Crypto Currency</span>
      </div>
    </div>
  )
}

export default Banner
