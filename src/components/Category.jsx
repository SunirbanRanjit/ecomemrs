
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Category = ({item},{key}) => {
  
  return (<div className='flex-1 m-2  rounded-md  overflow-hidden relative '>
       
       <Link to='/viewcategory' state={[item.src,item.title]}> <img src={item.src} className="w-[80%] mx-auto aspect-square object-cover rounded-[50%]" alt='category_img'/> </Link>
       
       
      
      <div className=' w-full h-[100%]  left-0 bottom-0 items-center justify-center  '>
          <h2 className='text-black bg-transparent  font-bold w-full text-center pt-2  text-[20px] '>{item.title}</h2>
         
</div> 
  </div>)
};

export default Category;
