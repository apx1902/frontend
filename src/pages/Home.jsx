import React, { useState } from 'react'
// import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodCard from '../components/FoodCard';
import Appdownload from '../components/Appdownload';
import Header from '../components/Header';

const Home = () => {

  const [category, setCategory ] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodCard category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
