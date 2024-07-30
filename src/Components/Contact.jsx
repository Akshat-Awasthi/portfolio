import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-3xl text-indigo-700 font-semibold m-5'>Contact Me</h1>
      <form className='flex flex-col shadow-lg h-[560px]  shadow-black' action="">
        <div className='flex flex-row'>
              <div className='flex flex-col m-5 ml-6'>
                  <label htmlFor="first " className='text-lg font-semibold text-indigo-700'>First Name</label>
                  <input type="text" required className='rounded h-9 w-60 mt-3 pl-3 focus:outline-none transform transition-transform hover:scale-105' />
                </div>
                <div className='flex flex-col m-5 ml-6'>
                  <label htmlFor="first" className='text-lg font-semibold text-indigo-700'>Last Name</label>
                  <input type="text" className='rounded h-9 w-60 mt-3 pl-3 focus:outline-none transform transition-transform hover:scale-105' />
                </div>
        </div>
         <label htmlFor="email" className='text-lg font-semibold text-indigo-700 ml-6 mb-3'>Email</label>
         <input type="email" required className='rounded h-9 w-[525px] ml-6 pl-3 focus:outline-none transform transition-transform hover:scale-105' />
         <label htmlFor="Phone" className='text-lg font-semibold text-indigo-700 ml-6 mb-3 mt-2'>Phone</label>
         <input type="number" required className='rounded h-9 w-[525px] ml-6 pl-3 focus:outline-none transform transition-transform hover:scale-105' />
         <label htmlFor="message" className='text-lg font-semibold text-indigo-700 ml-6 mb-3 mt-2'>Message</label>
          <textarea name="message" className='rounded ml-6 w-[525px] pt-2 pl-3 focus:outline-none transform transition-transform hover:scale-105' required cols="25" rows="4"></textarea>

          <button className='bg-indigo-700 m-5 ml-6 mt-10 rounded h-9 text-white transform transition-transform hover:scale-110'>Send Message</button>
          
        
      </form>

    </div>
  )
}

export default Contact