import React from 'react'
import map from '../assets/map.PNG'
const Map = () => {
  return (
    <div className='w-full sm:w-[500px] mx-auto my-auto'>
        <img src={map} alt="map" className=' pb-5 bg-gradient-to-t from-indigo-500' />
        <div className="mx-auto w-[50%]"> your address: This is address. pin-xxxxxx  </div>
    </div>
  )
}

export default Map