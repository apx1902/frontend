import React from 'react'

const Header = () => {
  return (
    <div className='h-[35vw] my-7 bg-[url("header_img.png")] bg-no-repeat bg-contain relative'>
      <div className="header-contents absolute flex flex-col items-start gap-5 max-w-[50%] bottom-[10%] lg:left-32 md:left-12 animate-[fadeIn_3s] ">
        <h2 className='text-[4vw] font-semibold text-white'>Order your favourite food here</h2>
        <p className='text-white text-[1vw] '>Choose from a diverse menu featuring a delectable array of delicious dishescrafted with the finest ingredients that are sure to satisfy your cravings and leave you craving for more.</p>
        <button className='border-none text-[#747474] font-medium bg-white py-3 px-8 rounded-full text-[0.8vw]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
