import React from 'react'
import millennial from '../assets/images/millennial.jpg'

function About() {
  return (
   
    <div className='flex  items-center justify-between p-4'>
    <div className=''>
    <div>
    <h1 className='text-3xl text-white  '>About Us</h1>
    <div className='w-[90px] h-1 rounded-md bg-yellow-600'></div>
    </div>
    <div className=''>
      <h1 className='text-xl text-white mb-4 mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, libero!</h1>
      <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam voluptatem dolore ut saepe eum nesciunt molestias unde, harum laborum accusantium sapiente. Reprehenderit corrupti mollitia error adipisci animi in voluptatum tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat similique quia obcaecati iusto. Obcaecati ducimus at laudantium, aliquam maiores inventore. Ratione culpa deleniti sint provident eveniet quisquam, repudiandae laborum eligendi distinctio. Minus autem nobis, dolores eum reprehenderit a, accusantium quisquam tempore enim debitis suscipit soluta commodi amet error similique magni, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus harum, ex consequatur ipsa voluptates impedit commodi suscipit obcaecati perferendis. itaque repellat? </p>
      <button className="btn btn-sm  bg-white text-black hover:text-white mt-4">Read More</button>
    </div>
    </div>
    <div className=''>
      <img className='w-full rounded-md' src={millennial} alt="" />
    </div>
    </div>
  
  )
}

export default About