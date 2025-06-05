import React from 'react'
import Image from 'next/image'
import Download from '@/components/Download'

export default function NewBanner() {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] bg-cover bg-center" 
         style={{ backgroundImage: "url('/bannerBG.jpg')" }}>
      
      <div className="w-11/12 mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Left Column - Text Content */}
            <div className="flex flex-col gap-4 z-10 justify-center mt-20 md:mt-20 text-left">
               <div className="flex  flex-col gap-5">
                 <span className="intro w-52 md:w-64">Welcome to Fresh Harvest</span>
       
                 <h1 className="text-5xl md:text-7xl text-left font-medium md:font-semibold ">
                   Fresh Fruits and <br /> Vegetables
                 </h1>
                 <p className="text-gray-800 text-sm">
                   At Fresh Harvests, we are passionate about providing you with the
                   freshest <br /> and most flawaful fruits and vegetables
                 </p>
       
                 <button className="button-main w-36">Shop Now</button>
               </div>
       
               <div className="flex md:justify-end z-0 ">
                 <Image src='/Special-offer.png' alt="salad" height={157} width={331} className="w-48 h-24 md:w-[331] md:h-[157]"></Image>
               </div>
       
            
            <div className=" md:mt-0">
         <Download></Download>
            </div>
       
       
             </div>

          {/* Right Column - Image */}
          {/* <div className="absolute right-0 -top-7 w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full md:w-[750]  md:h-[850px]">
              <Image 
                src="/photo01.png" 
                alt="Happy customer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div> */}
     


        </div>
      </div>

      {/* Overlay for better text readability */}
           <div className="absolute right-0 bottom-0">
            <div className=" w-[20px] md:w-[750px]  md:h-[850px]">
              <Image 
                src="/photo01.png" 
                alt="Happy customer"
                fill
                className="object-contain "
                
              />
            </div>
          </div>

    </div>
  )
}