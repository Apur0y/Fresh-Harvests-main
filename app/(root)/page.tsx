
import About from '@/sections/About'
import Blog from '@/sections/Blog'
import NewBanner from '@/sections/NewBanner'
import Products from '@/sections/Products'
import SpecialOffer from '@/sections/SpecialOffer'
import Testimonial from '@/sections/Testimonial'
import React from 'react'

export default function Home() {
  return (
    <div className='text-gray-900 '>

    
<NewBanner></NewBanner>
      {/* <Banner></Banner> */}
      
  
      <Products></Products>
      <About></About>
      <SpecialOffer></SpecialOffer>
      <Testimonial></Testimonial>
      <Blog></Blog>
      
    </div>
  )
}
