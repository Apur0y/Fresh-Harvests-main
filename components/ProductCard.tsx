'use client'
import { Product } from '@/sections/Products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='w-40 md:w-72 flex flex-col justify-between shadow-lg gap-4 p-2'>

        {/* <img src={product?.image} alt="" /> */}
        <div className='bg-gray-200 p-2 rounded-lg flex justify-center items-center'>
        <Image src={product.images[0] ?? '/placeholder.png'} alt={product.productName} height={208} width={258} className='rounded-lg' />

        </div>

        <div>
        {product.productName}
        <p>{product.price}</p>
        </div>

        <Link href={`/products/${product.id}`}>
                <button className='py-2 border-2 border-gray-200 rounded-lg hover:bg-amber-500'>Add to cart</button>

        </Link>




    </div>
  )
}
