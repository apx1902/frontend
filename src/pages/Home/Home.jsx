import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodCard from '../../components/FoodCard/FoodCard';
import Appdownload from '../../components/AppDownload/Appdownload';

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
