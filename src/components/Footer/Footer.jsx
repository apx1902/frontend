import React from 'react'
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 px-5 py-10 mt-24" id='footer'>
            <div className=" grid grid-cols-[2fr_1fr_1fr] gap-28 lg:ml-32 mt-14 mb-5">
                <div className="flex flex-col gap-5 items-start ml-16 ">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis, debitis alias omnis vel pariatur voluptates porro dolore ratione distinctio dolorem ipsam voluptatibus sunt iusto Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nobis!</p>
                    <div className="flex gap-2">
                        <img src={assets.facebook_icon} alt="" className='mr-3 w-10'/>
                        <img src={assets.linkedin_icon} alt="" className='mr-3 w-10'/>
                        <img src={assets.twitter_icon} alt="" className='mr-3 w-10'/>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h2 className='text-3xl font-medium text-white'>COMPANY</h2>
                    <ul>
                        <li className="list-none cursor-pointer mb-2">Home</li>
                        <li className="list-none cursor-pointer mb-2">About Us</li>
                        <li className="list-none cursor-pointer mb-2">Delivery</li>
                        <li className="list-none cursor-pointer mb-2">Privacy Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h2 className='text-3xl font-medium text-white'>GET IN TOUCH</h2>
                    <ul>
                        <li className="list-none cursor-pointer mb-2">+1-123-456-7890</li>
                        <li className="list-none cursor-pointer mb-2">contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-[81%] my-3 h-[2px] bg-[#c0c8c3] border-none'/>
            <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer
