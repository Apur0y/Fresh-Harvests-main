import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id='about-us' className='flex w-11/12 flex-col md:flex-row mx-auto justify-between mt-10'>

        <div className='md:w-1/2'>
        <Image src='/as.jpg' alt='man' height={349} width={486} className='rounded-lg' />

        </div>

         <div className="md:w-1/2 flex flex-col gap-2 justify-center mt-6">
        <p className="intro w-28">About Us</p>
        <h1 className="text-3xl">About Fresh Harvest</h1>
        <p className="text-[#4A4A52] text-sm leading-6">Welcome to fresh harvest your primary destination for high quality and <br /> fresh produce we are and passionate about providing you with the finest fruits <br /> vegetables
         salad ingredients to nourish your body and delight your <br /> taste buds. With a commitment to excellence substainability and customer <br /> satisfaction fresh harvest is here to revolutionize your resources having <br /> experience.
        </p>
        <button className='button-secondary w-auto'>Read More</button>
      </div>
    </div>
  )
}
