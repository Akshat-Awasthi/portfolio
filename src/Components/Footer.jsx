import React from 'react'
import logo from "/logo.png"

const Footer = () => {
  return (
    <div className='h-16 w-full flex flex-row items-center overflow-x-hidden border-black'>
        <div className='flex-1'><h1> </h1></div>
        <div className='flex flex-row p-5 items-center'>
        <div><h1 className='text-gray-300'> @made with love ❤️ by</h1></div>
        <div className='bg-slate-100 rounded-xl ml-2'> <h1 className='text-slate-100'> |</h1></div>
        <div className='flex flex-row border-white ml-2 mr-2'>
        <h1 className='text-3xl text-blue-800 font-semibold mt-2 ml-2'>Akshat Awasthi</h1>
        <img className='h-14' src={logo} alt="Logo" />
        </div>
       
        
        </div>
       
    </div>
  )
}

export default Footer
 