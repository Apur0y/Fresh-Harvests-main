"use client";
import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { Product } from "@/sections/Products";
import {  Rating } from "@mui/material";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SingleProductProps {
  params: { id: string };
}


export default function SingleProduct({ params }: SingleProductProps) {
  const [product, setProduct] = useState<Product | null>(null);

  const { data: productData, isLoading } = useGetProductByIdQuery(params?.id);

  useEffect(() => {
    if (productData) {
      setProduct(productData.data);
    }
  }, [productData]);

  if (isLoading) {
    const l = "Loading";
    return l;
  }
  console.log(product);
  return (
    <div className="text-gray-900 flex pt-24 gap-10 w-11/12 mx-auto">
      <div className="w-1/2 border flex justify-center items-center py-24 rounded-lg border-gray-300">
        <Image
          src={product?.images?.[0] ?? "/placeholder.png"}
          alt={product?.productName ?? "Product image"}
          height={200}
          width={200}
        />
      </div>

      <div className="w-1/2 flex flex-col gap-1">
        <p className="intro w-20">Fruits</p>
        <h1 className="heading">{product?.productName}</h1>
        <p>
          <Rating
            name="text-feedback"
            value={6}
            readOnly
            precision={0.5}
             className="text-orange-600"
            emptyIcon={
              <StarIcon  style={{ opacity: 0.55 }} fontSize="inherit" />
            }
           
          />
          
          5.0(1 review)
        </p>
        <h2 className="text-2xl font-semibold">Price: <span className="second-color">${product?.price}</span> </h2>
        <p className="text-[#4A4A52] text-sm">{product?.description}</p>
      </div>
    </div>
  );
}
