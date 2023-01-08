import React from 'react';

import { ApiCategories } from '../componentApi/CategoryApi';
import Category from './Category';
const Categories = () => {
  return < div className=' mb-[30px]'>
    <div className="text-[30px] w-full text-center  text-bold"> Food Category </div>
    <div className=' justify-between items-center grid mobile:grid-cols-2 grid-cols-3 p-5 '>
    
    {ApiCategories.map((category, index)=>(
        
        <Category item={category} key={index}/>
        
    ))}
  </div>
  </div>;
};

export default Categories;
