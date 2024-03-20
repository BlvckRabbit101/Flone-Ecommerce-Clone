import React from 'react'
import Hero from '../Hero/Hero'
import Subhero from '../Subhero/Subhero'
import Deals from '../Deals/Deals'
import Ourblog from '../OurBlog/Ourblog'
import axios from "axios";
import Herosub from '../Hero/Herosub'

const Home = () => {
  return (
    <div>
      <Hero />
      <Subhero />
      <Deals />
      <Ourblog />
    </div>
  )
}

export default Home
