import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoQrCodeOutline } from "react-icons/io5";
import { GiFarmer, GiFarmTractor } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";

interface SidebarProps{
  sidebarToggle: boolean
}


// const Slidebar = () => {

const Slidebar = ({sidebarToggle}: SidebarProps) => {
  console.log("side")

  return (
    <div className={`${sidebarToggle? "hidden": "block"} w-64 bg-green-800 fixed h-full px-4 py-2`}>
      <div className=' px-4 py-2'>
        <h1 className='text-2xl text-white font-bold'>KaseApp</h1>
      </div>
      
      <hr className='border-t-2 border-white my-2 ' />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="home" className='px-3 flex text-white items-center'>
            <FaHome className='w-6 h-6 mr-2 text-green-500' />
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="" className='px-3 flex text-white items-center'>
            <IoQrCodeOutline className='w-6 h-6 mr-2 text-green-500' />
            Trace
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="farm" className='px-3 flex text-white items-center'>
            <GiFarmTractor className='w-6 h-6 mr-2 text-green-500' />
            Farm
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="#" className='px-3 flex text-white items-center'>
            <GiFarmer className='w-6 h-6 mr-2 text-green-500' />
            Vendor
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href="market" className='px-3 flex text-white items-center'>
            <BsCartPlus className='w-6 h-6 mr-2 text-green-500' />
            Market
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Slidebar
