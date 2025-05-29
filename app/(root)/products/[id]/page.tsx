'use client'
import { useGetProductByIdQuery } from '@/redux/api/productApi';
import { Product } from '@/sections/Products';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function SingleProduct({ params }) {

  const [product, setProduct] = useState<Product | null>(null);

      const { data: productData, isLoading } = useGetProductByIdQuery(
    params?.id
  );

  

 useEffect(() => {
  if (productData) {
    setProduct(productData.data);
  }
}, [productData]);


  if(isLoading){
    const l="Loading"
    return l;
  }
console.log(product);
  return (
    <div className='text-gray-900'>
        <div>
            <Image
              src={product?.images?.[0] ?? '/placeholder.png'}
              alt={product?.productName ?? 'Product image'}
              height={200}
              width={200}
            />
        </div>

        <div>
               <p className="intro">Fruits</p>
               <h1>{product?.productName}</h1>
               <p>5.0(1 review)</p>
               <h2>{product?.price}</h2>
               <p>{product?.description}</p>

        </div>


    </div>
  )
}
