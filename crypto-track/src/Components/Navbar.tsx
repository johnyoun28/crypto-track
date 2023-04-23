import React from 'react'
import { useNavigate } from "react-router-dom";

type Props = {}

const Navbar = (props: Props) => {

  const navigate = useNavigate()
  
  return (
    <div className=' w-full flex justify-even pl-[24px] items-center min-h-[64px] shadow-md '>

        <span onClick={() => navigate('/')} className='text-[#EEBC1D] font-black text-lg cursor-pointer'>Crypto</span>
    </div>
  )
}

export default Navbar