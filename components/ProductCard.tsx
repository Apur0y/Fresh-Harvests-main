import Image from 'next/image';
import React from 'react'

interface Product {
  id: string;
  name: string;
  weight: string;
  image?: string; // Optional if you have images
  // Add other product properties as needed
}


export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='w-40 md:w-72 flex flex-col justify-between shadow-lg gap-4 p-2'>

        {/* <img src={product?.image} alt="" /> */}
        <div className='bg-gray-200 p-2 rounded-lg flex justify-center items-center'>
        <Image src={product.image ?? '/placeholder.png'} alt={product.name} height={208} width={258} className='rounded-lg' />

        </div>

        <div>
        {product.name}
        <p>{product.weight}</p>
        </div>

        <button className='py-2 border-2 border-gray-200 rounded-lg'>Add to cart</button>



    </div>
  )
}
