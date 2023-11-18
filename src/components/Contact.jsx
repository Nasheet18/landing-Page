import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <>
    <div className='bg-slate-800 p-4 '>
         
    <form className='flex items-center justify-center'> 
    
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-xl text-white pt-2">Enter your email address</span>
      </label> 
      <div className="join mb-4">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn bg-white text-black hover:text-white join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
   
   </div>
    </>
  )
}

export default Contact