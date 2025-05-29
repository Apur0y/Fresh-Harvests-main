'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SpecialOffer() {

      const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate target time (5 days from now)
    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 5);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetTime.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[640px] w-11/12 mx-auto  bg-gray-200">
      {/* <Image
    src="/offer-banner.jpg"
    alt="Offer banner"
    fill
    priority
    quality={80}
    className="object-cover"
   
  />
         */}
      <div className="absolute top-1/5 z-10 p-8 flex flex-col justify-center gap-5">
        <p className="intro ">Special Offer</p>
        <h1 className="text-7xl font-bold">Seasonal Fruit Bundle</h1>
        <h2 className="text-5xl font-semibold">
          Discount up to <span className="second-color">80% OFF</span>
        </h2>


        <div className="flex  gap-3">
        {/* Days */}
        <TimeCard value={timeLeft.days} label="Days" />
        
        {/* Hours */}
        <TimeCard value={timeLeft.hours} label="Hours" />
        
        {/* Minutes */}
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        
        {/* Seconds */}
        <TimeCard value={timeLeft.seconds} label="Seconds" />
      </div>



      </div>

      <div className="absolute left-1/2 top-1/6">
        <Image
          src="/fruits.png"
          alt="Offer banner"
          width={627}
          height={380}
        />
      </div>
    </div>
  );
}


function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col ">
      <div className="w-16 h-16 flex items-center flex-col px-5 py-11 justify-center bg-white  rounded-lg shadow-xl border-2 border-gray-200">
        <span className="text-2xl font-bold text-gray-800">
          {value.toString().padStart(2, '0')}
        </span>
         <span className="mt-2 text-sm  text-gray-500">
        {label}
      </span>
      </div>
     
    </div>
  );}