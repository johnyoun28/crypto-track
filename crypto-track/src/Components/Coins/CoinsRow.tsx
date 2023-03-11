import React from 'react'

const CoinsRow = () => {
  return (
    <div className='relative overflow-x-auto'>
      <table className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 table-fixed">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              24H Change
            </th>
            <th scope="col" className="px-6 py-3">
              Market Cap
            </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default CoinsRow

