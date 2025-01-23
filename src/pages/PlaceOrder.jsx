import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='flex items-start justify-between gap-40 mt-20'>
      <div className="w-full flex-1">
        <p className='text-3xl text-[#262626] font-semibold mb-10'>Delivery Information</p>
        <div className="flex gap-3">
          <input type="text" placeholder='First Name' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
          <input type="text" placeholder='Last Name' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
        </div>
        <input type="email" placeholder='Email Address' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
        <input type="text" placeholder='Street' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
        <div className="flex gap-3">
          <input type="text" placeholder='City' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
          <input type="text" placeholder='State' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder='Zip code' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
          <input type="text" placeholder='Country' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
        </div>
        <input type="text" placeholder='Phone' className='mb-4 w-full p-3 border-2 border-gray-300 outline-orange-300' />
      </div>
      <div className="w-full flex-1">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className='text-[#262626] text-3xl font-medium'>Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-3' />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()>0?2:0}</p>
            </div>
            <hr className='my-3' />
            <div className="flex justify-between text-[#555]">
              <p>Total</p>
              <p>${getTotalCartAmount()>0?getTotalCartAmount()+2:0}</p>
            </div>
          </div>
          <button className='border-none text-white font-medium bg-orange-500 w-60 py-3 px-8 rounded-md mt-9' >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
