import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=""/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam aperiam quo incidunt veritatis sapiente, ducimus, magnam tempora alias odit suscipit eius, totam quia tempore.</p>

            </div>
            {/* center */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/* right */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-90XXXXXXXX</li>
                    <li>xyz@gamil.com</li>
                </ul>
            </div>
        </div>
        <hr/>

    <div>
        <p className='text-center py-5 test-sm'>Copyright 2024@Prescripto - All Rights Reserved</p>
    </div>
</div>
  )
}

export default Footer