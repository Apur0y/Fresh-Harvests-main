'use client'
import { Product } from '@/sections/Products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



export default function ProductCard({ product }: { product: Product }) {
  return (
   <div className='w-40 md:h-[360px] md:w-[282px] flex flex-col justify-between shadow-lg gap-4 p-2 group hover:scale-105 transition-all duration-300 bg-white rounded-lg overflow-hidden'>

   
    <div className='bg-gray-200 p-2 rounded-lg flex justify-center items-center h-40 md:h-48 overflow-hidden'>
        <Image 
            src={product.images[0] ?? '/placeholder.png'} 
            alt={product.productName} 
            height={200} 
            width={200} 
            className='rounded-lg object-cover transition-transform duration-500 group-hover:scale-110' 
        />
    </div>

  
    <div className='flex justify-center items-center flex-col gap-2 p-1'>
        <h3 className='font-semibold text-gray-800 line-clamp-2'>{product.productName}</h3>
        <p className='text-base  text-gray-600'>{product.price}tk./kg</p>
        
       
        <Link 
            className='py-2  w-full border-2 flex justify-center items-center transition-all duration-300 border-gray-200 rounded-lg group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white' 
            href={`/products/${product.id}`}
        >
            <button className='font-medium'>Add to cart</button>
        </Link>
    </div>
</div>
  )
}
