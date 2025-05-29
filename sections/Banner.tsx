import Download from "@/components/Download";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className=" flex  md:justify-around px-5  pt-24 bg-gray-100">
      {/* left div site */}
      <div className="flex flex-col gap-4 z-10 justify-center text-left">
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

        <div className="flex md:justify-end z-0">
          <Image src='/arrow.jpg' alt="salad" height={10} width={120} className="hidden md:flex"></Image>
          <Image src='/Special-offer.png' alt="salad" height={157} width={331} className="w-48 h-24 md:w-[331] md:h-[157]"></Image>
        </div>

     
     <div className="mt-24 md:mt-0">
  <Download></Download>
     </div>


      </div>

      {/* right side div */}
      <div className="absolute left-1/2 md:left-0 overflow-auto top-1/2  md:relative">
        
        <Image src="/as.jpg" alt="little-girl" height={473} width={434} className=" h-[473px] w-[500px] md:h-full md:w-full"></Image>
      </div>
    </div>
  );
}
