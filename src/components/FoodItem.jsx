import React, { useContext, } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-2xl shadow-md transition duration-300 animate-[fadeIn_1s]'>
      <div className=" relative">
        <img src={image} alt="" className="w-full rounded-t-xl food-item-image" />
        {!cartItems[id]?
          <img src={assets.add_icon_white} alt='' onClick={()=>addToCart(id)} className='absolute w-[40px] bottom-4 right-4 cursor-pointer rounded-[50%]'/>: 
          <div className='absolute bottom-4 right-4 flex gap-2 p-2 items-center bg-white rounded-[50px]'>
            <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)} className='w-[30px] cursor-pointer'/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)} className='w-[30px] cursor-pointer'/>
          </div>
        }
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
            <p className='font-medium text-xl'>{name}</p>
            <img src={assets.rating_starts} alt="" className='w-[70px]'/>
        </div>
        <p className="text-[$676767] text-sm">{description}</p>
        <p className='text-orange-400 text-2xl font-medium mt-2'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
