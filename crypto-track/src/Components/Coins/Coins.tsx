import React from 'react'

const Coins = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <span className="text-2xl font-bold text-center">Cryptocurrency Prices by Market Cap</span>
      <input type="text" placeholder="Search For a Crypto Currency..
" className="w-[80%] mt-4" />
    </div>
  )
}

export default Coins
