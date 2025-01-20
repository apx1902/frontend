import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { food_list } from '../assets/assets';

const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='mt-16'>
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-base">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          //if fooditem is available in the cartItems then we will display it in the cart page
          if (cartItems[item.fid] > 0) {
            return (
              <>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-base my-3 text-black">
                  <img src={item.image} alt="" className='w-[50px]' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.fid]}</p>
                  <p>${item.price * cartItems[item.fid]}</p>
                  <p className='cursor-pointer text-red-500' onClick={() => removeFromCart(item.fid)}>X</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className="mt-10 flex justify-between gap-60">
        <div className="flex-1 flex flex-col gap-5">
            <h2 className='text-[#262626] text-3xl font-medium'>Cart Total</h2>
            <div>
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='my-3'/>
              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr className='my-3'/>
              <div className="flex justify-between text-[#555]">
                <p>Total</p>
                <p>${getTotalCartAmount()+2}</p>
              </div>
            </div>
            <button className='border-none text-white font-medium bg-orange-500 w-60 py-3 px-8 rounded-md'>Proceed to Checkout</button>
        </div>
        <div className="flex-1">
          <div className="">
            <p className='text-[#262626] text-md font-medium'>If you have a promo code, Enter it here</p>
            <div className="mt-3 flex justify-between items-center bg-[#eaeaea] rounded-md">
              <input type="text" placeholder='Promo Code...' className='bg-transparent border-none outline-none pl-3'/>
              <button className='w-36 px-1 py-3 bg-black text-white rounded-md'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
