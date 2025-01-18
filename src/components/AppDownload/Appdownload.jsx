import React from 'react'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='m-auto mt-20 text-center text-5xl font-semibold flex flex-col items-center' id='app-download'>
        <p className='leading-normal'>For Better Experience Download <br/> Tomato App</p>
        <div className="flex gap-10 mt-8">
            <img src={assets.play_store} alt="" className='transition duration-500 cursor-pointer hover:transform hover:scale-105'/>
            <img src={assets.app_store} alt="" className='transition duration-500 cursor-pointer hover:transform hover:scale-105'/>
        </div>
    </div>
  )
}

export default Appdownload
