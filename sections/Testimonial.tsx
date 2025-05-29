"use client";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const customers = [
    {
      name: "Jane Doe",
      review:
        "Fresh Harvest has completely changed the way I shop for groceries! Their produce is always fresh, vibrant, and full of flavor—like it was just picked from the farm. The convenience of doorstep delivery and their commitment to organic, sustainable farming makes me feel good about every purchase. The 5-day coupon timer on their website is a genius way to grab discounts before they expire. Highly recommend",
      image: "/customer1.jpg",
      profession: "Professional Fermer",
    },
    {
      name: "Morni May",
      review:
        "As someone who prioritizes farm-to-table freshness, I was blown away by Fresh Harvest’s quality. Unlike supermarket produce that often sits for days, their fruits and veggies arrive crisp and nutrient-packed. The countdown timer for limited-time offers adds a fun urgency to shopping, and their subscription box is a lifesaver for busy households. If you care about taste and sustainability, this is the place to shop",
      image: "/customer2.jpg",
      profession: "Fruit Grower",
    },
    {
      name: "Hetli Hare",
      review:
        "Fresh Harvest sets the gold standard for online grocery services. Their transparent sourcing, carbon-neutral delivery, and real-time coupon timer (which I’ve seen boost conversions by 20%) demonstrate innovation in both product and UX. For health-conscious consumers, it’s a no-brainer",
      image: "/customer3.jpg",
      profession: "Professional chef",
    },
  ];

  return (
    <div className="w-4/5 mx-auto">
      <div className="header-align mb-10">
        <p className="intro">Testimonial</p>
        <h1 className="heading">What Our Customers Say</h1>
        <p className="para">
          Don&apos;t just take our word for it --here&apos;s what some of our
          customers have to <br /> say about their experience with Fresh Harvest
        </p>
      </div>

      <Swiper pagination={true} modules={[Pagination]}>
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white flex justify-center items-center p-6 rounded-xl h-full">
              <div className="flex justify-center mb-6 h-md w-md">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  width={120}
                  height={120}
                  className="rounded-t-full rounded-b-full object-cover w-72 h-96"
                />
              </div>

              <div className="flex-1  bg-gray-100 p-5 rounded-2xl w-60">
                <p className="text-gray-600 mb-6 italic">&quot;{customer.review}&quot;</p>
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-start">{customer.name}- <span className="font-normal text-base">{customer.profession}</span></h3>
            
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
