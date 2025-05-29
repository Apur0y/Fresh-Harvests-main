import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
  return (
    <div className='w-11/12 mx-auto'>
            <div className="header-align">
        <p className="intro">Testimonial</p>
        <h1 className="heading">What Our Customers Say</h1>
        <p className="para">
          Don&apos;t just take our word for it --here&apos;s what some of our customers have to <br /> say about their experience with Fresh Harvest
        </p>
      </div>


      <div>
        {/* image */}
        <div className='flex w-64'>
            <Image src='/leaf.png' alt='human' height={396} width={287} className='rounded-2xl'></Image>

        </div>


      </div>


    </div>
  )
}
