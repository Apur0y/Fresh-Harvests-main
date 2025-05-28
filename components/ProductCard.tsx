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
    <div>
        {product.name}
        <p>{product.weight}</p>
    </div>
  )
}
