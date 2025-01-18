import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("Home");

    return (
        <div className='flex py-5 justify-between items-center'>
            <img src={assets.logo} alt="" className="w-[150px]" />
            <ul className='flex list-none gap-5 text-[#49557e] text-lg cursor-pointer'>
                <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home"?"pb-1 font-semibold border-b-2 border-orange-400":""}>Home</Link>
                <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"pb-1 font-semibold border-b-2 border-orange-400":""}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"pb-1 font-semibold border-b-2 border-orange-400":""}>Mobile App</a>
                <a href="#footer" onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"pb-1 font-semibold border-b-2 border-orange-400":""}>Contact Us</a>
            </ul>
            <div className="flex items-center gap-10">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon relative">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot absolute min-w-[10px] min-h-[10px] bg-orange-400 rounded-full top-[-8px] right-[-8px]"></div>
                </div>
                <button className='bg-transparent text-sm text-[#49557e] border-2 border-orange-400 py-2 px-4 rounded-3xl cursor-pointer hover:bg-orange-400 hover:text-white transition duration-300'>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
