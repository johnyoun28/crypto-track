import React from 'react'

const CoinsRow = () => {
  return (
    <div className='relative overflow-x-auto'>
      <table className="w-full text-base rounded text-black bg-[#EEBC1D] dark:bg-gray-700 dark:text-gray-400 table-auto sm:text-sm">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-4 w-auto text-left">
              Coin
            </th>
            <th scope="col" className="px-6 py-4 w-1/4 text-right md:text-center">
              Price
            </th>
            <th scope="col" className="px-6 py-4 w-1/4 text-right">
              24H Change
            </th>
            <th scope="col" className="px-6 py-4 w-1/4 text-right table-cell md:hidden">
              Market Cap
            </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default CoinsRow

