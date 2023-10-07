import React from 'react';

import { ApiCategories } from '../componentApi/CategoryApi';
import Category from './Category';
const Categories = () => {
  return < div className=' mb-[30px]'>
    <div className="text-[30px] w-full text-center  "> Food Category </div>
    <div className=' justify-between items-center grid border-2 border-red-300 rounded-[16px] mobile:grid-cols-2 grid-cols-3 p-5 '>
    
    {ApiCategories.map((category, index)=>(
        
        <Category item={category} key={index}/>
        
    ))}
  </div>
  </div>;
};

export default Categories;
