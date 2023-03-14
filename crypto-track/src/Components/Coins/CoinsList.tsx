
import React from 'react';
import CoinCard from './CoinCard';
import { CoinData } from './Coins';
import CoinsRow from './CoinsRow';

type CoinListProps = {
  coins: CoinData[];
};

const CoinsList = ({ coins }: CoinListProps) => {
  return (
    <div className='w-[90%] mt-5 mb-5'>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
        <CoinsRow />
        
          {coins.map(coin => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
       
      </table>
    </div>
  );
};

export default CoinsList;

