import React from 'react'

function Navbar() {
  return (
    <>
    <div className='flex flex-wrap  items-center justify-between p-4 bg-slate-500 sticky top-0'>
        <div>
            <h1 className='text-xl font-medium cursor-pointer'>LANDING PAGE</h1>
        </div>
        <div className='md:flex flex-wrap  items-center sm:gap-[25px] hidden md:gap-[40px] '>
            <ul className='flex flex-wrap  items-center sm:gap-[15px] md:gap-[20px]'>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '>Home</li>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '>Blog</li>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '>Page</li>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '>Service</li>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '>Testimonial</li>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '>Contact</li>
                <li className='text-white cursor-pointer hover:text-slate-800 hover:underline '><span className='text-black hover:text-white bg-white rounded-md p-2 text-base hover:bg-slate-800 active:bg-slate-900 font-semibold'>Buy Now</span></li>
            </ul>
            <div>
            
                <input className='text-white rounded-md md:p-1 p-0 md:hidden lg:flex outline-none bg-slate-800' type="search" name="" id=""  placeholder='search here'/>
            </div>
        </div>
        <div className='flex flex-wrap items-center md:hidden'>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></a>
        </div>
    </div>
    </>
  )
}

export default Navbar