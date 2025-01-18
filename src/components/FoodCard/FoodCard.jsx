import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodCard = ({category}) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='mt-7' id='food-card'>
            <h1 className='text-[#262626] text-3xl font-medium'>Top dishes near you</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-7">
                {food_list.map((item,index)=>{
                    if(category==="All" || category === item.category){
                      return (
                        <FoodItem key={index} id={item.fid} name={item.name} price={item.price} description={item.description} image={item.image}/>
                    )}
                })}
            </div>
        </div>
    )
}

export default FoodCard
