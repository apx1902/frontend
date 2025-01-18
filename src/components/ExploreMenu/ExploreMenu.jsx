import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col gap-5' id='explore-menu'>
            <h1 className='text-[#262626] text-3xl font-medium'>Explore our menu</h1>
            <p className='lg:max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of delicious dishescrafted with the finest ingredients that are sure to satisfy your cravings and leave you craving for more.</p>
            <div className="flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll scrollbar-hide">
                {menu_list.map((item, index) => {
                    return (<div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='mt-3 text-[#747474] text-[1.1vw] cursor-pointer'>
                        <img src={item.menu_image} alt="item.menu_image" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-3xl ${category === item.menu_name ? 'border-4 p-1 border-orange-400 rounded-full' : ''}`} />
                        <p className='mt-2'>{item.menu_name}</p>
                    </div>
                    )
                })}
            </div>
            <hr className='my-3 h-[3px] bg-[#e2e2e2]' />
        </div>
    )
}

export default ExploreMenu;
