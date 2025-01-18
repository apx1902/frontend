import React, { useState } from 'react'
import { assets } from '../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up");
    return (
        <div className='absolute z-10 w-full h-full bg-[rgba(0,0,0,0.5)] grid '>
            <form className="w-[430px] text-[#808080] bg-white place-self-center flex flex-col gap-5 p-10 rounded-xl text-md animate-[fadeIn_1s]">
                <div className="flex items-center justify-between">
                    <h2 className='text-[#262626] text-3xl font-semibold my-2'>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} className='cursor-pointer'/>
                </div>
                <div className="login-popup-input">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your name...' required className='border border-orange-400 outline-none px-5 py-3 mb-4 w-full rounded-md'/>}
                    <input type="email" placeholder='Your email...' required className='border border-orange-400 outline-none px-5 py-3 mb-4 w-full rounded-md'/>
                    <input type="password" placeholder='Password...' required className='border border-orange-400 outline-none px-5 py-3 mb-4 w-full rounded-md'/>
                </div>
                <button className='text-white bg-orange-400 py-3 rounded-md font-semibold'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="flex items-start gap-3 mt-[-5px]">
                    <input type="checkbox" required className='mt-1'/>
                    <p>By continuing, i agree to the <span className='cursor-pointer text-orange-400'>Terms of Use</span> and <span className='cursor-pointer text-orange-400'>Privacy Policy</span></p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account? <span className='cursor-pointer text-orange-400' onClick={() => setCurrentState("Sign Up")}>Click here</span></p> :
                    <p>Already have an account? <span className='cursor-pointer text-orange-400' onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
