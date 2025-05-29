import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='flex w-11/12 mx-auto justify-between'>

        <div className='w-1/2'>
        <Image src='/as.jpg' alt='man' height={349} width={486} className='rounded-lg' />

        </div>

         <div className="w-1/2 flex flex-col gap-2 justify-center">
        <p className="intro ">About Us</p>
        <h1 className="heading">About Fresh Harvest</h1>
        <p className="text-[#4A4A52] text-sm leading-6">Welcome to fresh harvest your primary destination for high quality and <br /> fresh produce we are and passionate about providing you with the finest fruits <br /> vegetables
         salad ingredients to nourish your body and delight your <br /> taste buds. With a commitment to excellence substainability and customer <br /> satisfaction fresh harvest is here to revolutionize your resources having <br /> experience.
        </p>
        <button className='button-secondary w-auto'>Read More</button>
      </div>
    </div>
  )
}
