import React from 'react'
import piacquadio from '../assets/images/piacquadio.jpg'
import plavalaguna from '../assets/images/plavalaguna.jpg'
import production from '../assets/images/production.jpg'
function Service() {
  return (
   <>
   <div className=' bg-slate-700  p-4'>
   <div className='mb-8'>
    <h1 className='text-3xl text-white  '>Our Services</h1>
    <div className='w-[90px] h-1 rounded-md bg-yellow-600'></div>
    </div>
  <div className='flex flex-wrap items-center justify-between'>
  <div className="rounded-md w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={plavalaguna} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">User Experience</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="card-actions justify-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path></svg></a>
    </div>
  </div>
</div>

<div className="rounded-md w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={piacquadio} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Creative Design</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <div className="card-actions justify-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
    </div>
  </div>
</div>

<div className="rounded-md w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={production} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Retina Ready</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <div className="card-actions justify-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</div>
  </div>


   </div>
   </>
  )
}

export default Service