import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='app w-[80%] m-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
