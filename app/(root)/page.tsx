import About from '@/sections/About'
import Banner from '@/sections/Banner'
import Products from '@/sections/Products'
import React from 'react'

export default function Home() {
  return (
    <div className='text-gray-900 '>
      <Banner></Banner>
      <Products></Products>
      <About></About>
    </div>
  )
}
