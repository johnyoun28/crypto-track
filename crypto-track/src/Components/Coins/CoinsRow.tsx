import React from 'react'

const CoinsRow = () => {
  return (
    <div className='relative overflow-x-auto'>
      <table className="w-full text-base rounded text-black bg-[#EEBC1D] dark:bg-gray-700 dark:text-gray-400 table-fixed">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 w-auto text-left">
              Coin
            </th>
            <th scope="col" className="px-6 py-3 w-1/4 text-right">
              Price
            </th>
            <th scope="col" className="px-6 py-3 w-1/4 text-right">
              24H Change
            </th>
            <th scope="col" className="px-6 py-3 w-1/4 text-right">
              Market Cap
            </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default CoinsRow

