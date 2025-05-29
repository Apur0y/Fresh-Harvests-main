'use client'
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Testimonial() {
  const customers = [
    {
      name: "Jane Doe",
      review:
        "Fresh Harvest has completely changed the way I shop for groceries! Their produce is always fresh, vibrant, and full of flavor—like it was just picked from the farm. The convenience of doorstep delivery and their commitment to organic, sustainable farming makes me feel good about every purchase. The 5-day coupon timer on their website is a genius way to grab discounts before they expire. Highly recommend",
      image: "/customer1.jpg",
      profession: "",
    },
    {
      name: "Morni May",
      review:
        "As someone who prioritizes farm-to-table freshness, I was blown away by Fresh Harvest’s quality. Unlike supermarket produce that often sits for days, their fruits and veggies arrive crisp and nutrient-packed. The countdown timer for limited-time offers adds a fun urgency to shopping, and their subscription box is a lifesaver for busy households. If you care about taste and sustainability, this is the place to shop",
      image: "/customer2.jpg",
      profession: "",
    },
    {
      name: "Hetli Hare",
      review:
        "Fresh Harvest sets the gold standard for online grocery services. Their transparent sourcing, carbon-neutral delivery, and real-time coupon timer (which I’ve seen boost conversions by 20%) demonstrate innovation in both product and UX. For health-conscious consumers, it’s a no-brainer",
      image: "/customer3.jpg",
      profession: "",
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <div className="header-align">
        <p className="intro">Testimonial</p>
        <h1 className="heading">What Our Customers Say</h1>
        <p className="para">
          Don&apos;t just take our word for it --here&apos;s what some of our
          customers have to <br /> say about their experience with Fresh Harvest
        </p>
      </div>

  <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="px-4"
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md h-full">
              <div className="flex justify-center mb-6">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-24 h-24"
                />
              </div>
              <p className="text-gray-600 mb-6 italic">{customer.review}</p>
              <div className="text-center">
                <h3 className="font-bold text-lg">{customer.name}</h3>
                <p className="text-gray-500 text-sm">{customer.profession}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
