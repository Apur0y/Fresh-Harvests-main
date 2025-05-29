"use client";
import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { Product } from "@/sections/Products";
import RelatedProducts from "@/sections/RelatedProducts";
import Review from "@/sections/Review";
import {  Rating } from "@mui/material";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface SingleProductProps {
  params: { id: string };
}


export default function SingleProduct({ params }: SingleProductProps) {
  const [product, setProduct] = useState<Product | null>(null);

  const { data: productData, isLoading } = useGetProductByIdQuery(params?.id);

  const [quantity,setQuantity]=useState(1);

  const handleQuantity=(value:string)=>{
    if(value=="minus" && quantity>1){
      setQuantity(quantity-1);
    }else{
      setQuantity(quantity+1)
    }
  }

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

    <div>
   <div className="text-gray-900 flex flex-col md:flex-row pt-24 gap-10 w-11/12 mx-auto">
      <div className="md:w-1/2 border flex justify-center items-center  rounded-lg border-gray-300">
        <Image
          src={product?.images?.[0] ?? "/placeholder.png"}
          alt={product?.productName ?? "Product image"}
          height={300}
          width={300}
        />
      </div>

      <div className="md:w-1/2 flex flex-col gap-1">
        <p className="intro w-20">Fruits</p>
        <h1 className="text-start heading ">{product?.productName}</h1>
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

        <div className="flex items-center mt-8">
          <p className="font-medium">Quantity:</p>
          <div>
            <button className="px-6 py-3 border border-gray-400" onClick={()=>handleQuantity("minus")}>-</button>
            <button className="px-6 py-3 border border-gray-400">{quantity}</button>
            <button className="px-6 py-3 border border-gray-400" onClick={()=>handleQuantity("plus")}>+</button>

          </div>
        </div>

        <div className="flex justify-between w-10/12 mx-auto mt-7">

          <button className="py-3 px-8 bg-gray-100 rounded-lg">
            Save as favorite
          </button>
          <button className="flex button-main">
            <FaShoppingCart className="my-auto mr-1" /> Add to cart
          </button>

        </div>
      </div>

    </div>
 

   <Review></Review>
      <RelatedProducts></RelatedProducts>
    </div>
  );
}
