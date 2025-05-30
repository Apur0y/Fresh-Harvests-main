'use client'
import { useGetProductsQuery } from '@/redux/api/productApi';
import React, { useEffect, useState } from 'react'
import { Product } from './Products';
import ProductCard from '@/components/ProductCard';


interface RelatedProductsProps {
  category: string;
}

export default function RelatedProducts({ category }: RelatedProductsProps) {
      const [products, setProducts] = useState<Product[]>([]);
     
    
    
      const { data: pro,isLoading } = useGetProductsQuery({});
      
    
      useEffect(() => {
 
    
        if (pro?.data) {

          setProducts(pro?.data?.filter((p: Product) => p.categoryId == category)); 
        }
    
      }, [ pro]);
    
      if (isLoading) {
        return <p>Loading...</p>;
      }
    
    
  return (
    <div className='text-gray-900'>
        <div className="header-align">
        <p className="intro">Our Products</p>
        <h1 className="heading">Related Products</h1>
      
      </div>
        <div className="flex flex-wrap justify-center gap-5">
                {products.slice(0,4).map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
              </div>
    </div>
  )
}
