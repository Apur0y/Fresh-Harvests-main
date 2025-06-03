"use client";
import { useGetCategoryByIdQuery } from "@/redux/api/categoryApi";
import { useGetProductByIdQuery } from "@/redux/api/productApi";
import { Product } from "@/sections/Products";
import RelatedProducts from "@/sections/RelatedProducts";
import Review from "@/sections/Review";
import { Rating } from "@mui/material";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RingLoader } from "react-spinners";

interface PageProps {
  params: Promise<{ id: string }>; // Changed to Promise
}

export default function SingleProduct({ params }: PageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<{ categoryName: string } | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

  const { data: productData, isLoading } = useGetProductByIdQuery(productId, {
    skip: !productId, // Skip query until we have the productId
  });
  const { data } = useGetCategoryByIdQuery(product?.categoryId, {
    skip: !product?.categoryId, // Skip query until we have categoryId
  });

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (value: string) => {
    if (value === "minus" ) {
      if(quantity < 2){
        return;
      }
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Resolve the params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setProductId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (productData?.data) {
      setProduct(productData.data);
      console.log(productData);
    }
    if (data?.data) {
      setCategory(data.data);
    }
  }, [productData, data]);

  if (isLoading || !productId) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RingLoader />
      </div>
    );
  }

  return (
    <div>
      <div className="text-gray-900 flex flex-col md:flex-row pt-24 gap-10 w-11/12 mx-auto">
        <div className="md:w-1/2 border flex justify-center items-center rounded-lg border-gray-300">
          <Image
            src={product?.images?.[0] ?? "/placeholder.png"}
            alt={product?.productName ?? "Product image"}
            height={300}
            width={300}
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-1">
        
          <p className="intro w-20">{category?.categoryName ?? "Fruit"}</p>
          <p className="flex md:my-4 gap-2 items-center">
            <Rating
              name="text-feedback"
              value={6}
              readOnly
              precision={0.5}
              className="text-orange-600 my-auto"
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            5.0 <span className="text-sm">(1 review)</span>
          </p>
          <h2 className="text-2xl font-semibold">
            Price: <span className="second-color">{product?.price}Tk./kg</span>
          </h2>
          <p className="text-[#4A4A52] text-sm">{product?.description}</p>

          <div className="flex items-center gap-2 mt-8">
            <p className="font-medium">Quantity: </p>
            <div>
              <button
                className="px-6 cursor-pointer py-3 border border-gray-400"
                onClick={() => handleQuantity("minus")}
              >
                -
              </button>
              <button className="px-6 py-3 border border-gray-400">
                {quantity}
              </button>
              <button
                className="px-6 py-3 border cursor-pointer border-gray-400"
                onClick={() => handleQuantity("plus")}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-4 md:w-10/12 mx-auto mt-7">
            <button className="md:py-3  w-full bg-gray-100 rounded-lg cursor-pointer">
              Save as favorite
            </button>
            <button className="flex w-full items-center justify-center button-main cursor-pointer">
              <FaShoppingCart className="my-auto mr-1" /> Add to cart
            </button>
          </div>
        </div>
      </div>

      <Review></Review>
      <RelatedProducts category={product?.categoryId ?? ""}></RelatedProducts>
    </div>
  );
}