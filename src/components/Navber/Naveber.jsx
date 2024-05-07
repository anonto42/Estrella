import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const Naveber = () => {
  return (
    <div className='w-full h-[40px] bg-transparent text-[#ffffff]'>

      <div className='flex justify-between w-full h-full items-center px-8 font-semibold text-[17px]'>
        <div className='mx-'><a href="">TAAGA </a></div>
        <div className='mx-'><a href="">TAAGA MAN </a></div>
        <div className='mx-'><a href="">HERSTORY</a></div>
      </div>
        {/* Logo */}
      <div className='flex w-full h-[80px] bg-transparent px-[30px] justify-between '>
        <div className='w-full h-full'>
          <a href="/">
            <img src="/Estrella.svg" className='w-[200px] top-0 absolute' alt="" />
          </a>
        </div>

        <div className='h-full flex justify-between items-center text-center'>
          <div className='flex text-2xl h-full justify-between items-center text-center'>
            <a href="">
              <FaMagnifyingGlass className='mx-3 hover:mb-2 cursor-pointer duration-150 ease-in-out active:scale-[1.15]'/>
            </a>
            <a href="">
              <FaRegUserCircle className='mx-3 hover:mb-2 cursor-pointer duration-150 ease-in-out active:scale-[1.15]'/>
            </a>
            <a href="">
              <FaShoppingBag className='mx-3 hover:mb-2 cursor-pointer duration-150 ease-in-out active:scale-[1.15]'/>
            </a>
            <a href="">
              <GiSelfLove className='mx-3 hover:mb-2 cursor-pointer duration-150 ease-in-out active:scale-[1.15]'/>
            </a>
          </div>
          {/* This is the bar icon */}
          <FaBarsStaggered className='text-3xl hover:scale-110 cursor-pointer active:scale-110 duration-150 ease-in-out'/>
        </div>

      </div>
    </div>
  )
}

export default Naveber