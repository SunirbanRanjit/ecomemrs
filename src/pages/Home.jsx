import React from 'react'
import Bottom from '../components/Bottom'
import Categories from '../components/Categories'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Slider from '../components/slider'
const Home = () => {

  return (
    <div>
        <Logo/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Bottom/>
    </div>
  )
}

export default Home