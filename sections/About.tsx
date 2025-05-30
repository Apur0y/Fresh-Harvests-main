import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id='about-us' className='flex w-11/12 flex-col md:flex-row mx-auto justify-between items-center my-16'>

        <div className='md:w-1/2 relative'>
        <Image src='/about.png' alt='man' height={349} width={486} className='rounded-full bg-main' />

         <div className='absolute hidden md:flex md:right-30 lg:right-50 top-20 md:top-50  '>
                  <Image
                          src={ "/mushroom.jpg"}
                          alt={"Product image"}
                          height={100}
                          width={100}
                          className='rounded-2xl shadow-2xl'
                        />
                    </div>  

        </div>

        

         <div className="md:w-1/2 flex flex-col gap-2 justify-center mt-6">
        <p className="intro w-28">About Us</p>
        <h1 className="text-3xl font-medium md:text-5xl">About Fresh Harvest</h1>
        <p className="text-[#4A4A52] text-sm leading-6">Welcome to fresh harvest your primary destination for high quality and <br /> fresh produce we are and passionate about providing you with the finest fruits <br /> vegetables
         salad ingredients to nourish your body and delight your <br /> taste buds. With a commitment to excellence substainability and customer <br /> satisfaction fresh harvest is here to revolutionize your resources having <br /> experience.
        </p>
        <button className='button-secondary w-36'>Read More</button>
      </div>
    </div>
  )
}
