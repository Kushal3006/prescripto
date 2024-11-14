import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image}></img>

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>B-1521 Shivaji Maharaj Marg<br></br>
          Maharashtra, Mumbai</p>
          <p className='text-gray-500'>Tel:+91-XXXXX-XXXXX</p>
          <p className='text-gray-500'>Email:abc@gmail.com</p>
          <b className='text-gray-500 text-lg'>CAREERS AT PRESCRIPTO</b>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black rounded-lg text-lg py-5 px-6 hover:bg-black hover:text-white transition-all duration-3s'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact