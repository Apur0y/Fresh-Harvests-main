"use client";
import ProductCard from "@/components/ProductCard";
import { useGetCategoryQuery } from "@/redux/api/categoryApi";
import { useGetProductsQuery } from "@/redux/api/productApi";

import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

type Category = {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
};

export type Product = {
  id: string;
  categoryId: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [isActive, setIsAcive] = useState("all");
  const [filtered, setfiltered] = useState(products);

  const { data: pro } = useGetProductsQuery({});
  const { data, isLoading } = useGetCategoryQuery({});
  console.log(pro);

  useEffect(() => {
    if (data?.data) {
      setCategory(data.data);
    }

    if (pro?.data) {
      setProducts(pro.data);
      setfiltered(pro.data);
      console.log(pro.data);
    }
  }, [data, pro]);

  if (isLoading) {
    <RingLoader />;
  }

  const handleCategoryChange = (p: string, id: string) => {
    console.log(id);
    setIsAcive(p);
    if (p == "all") {
      setfiltered(products);
    } else {
      setfiltered(products.filter((product) => product.categoryId === id));
    }
    console.log("My produts",products);
  };

  return (
    <div id="shop" className="w-11/12 mx-auto mt-24 md:mt-0">
      
      <div className="header-align">
        <p className="intro">Our Products</p>
        <h1 className="heading">Our Fresh Products</h1>
        <p className="para">
          We Pride ourselves on offering a wide variety of fresh and flavourful
          fruits, <br /> vegetables, and salad ingredients
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 my-8">
        <button
          key="all"
          className={`transition-all  ${
            isActive === "all"
              ? "bg-main text-white scale-105 shadow-md"
              : "border-2 border-gray-200 text-gray-600 hover:bg-gray-50"
          }   duration-200 ease-in-out py-1 md:py-3 px-4 md:px-6 rounded-lg capitalize`}
          onClick={() => handleCategoryChange("all", "12")}
        >
          All
        </button>
        {category.map((cat) => (
          <button
            key={cat.id}
            className={`transition-all  ${
              isActive === cat.categoryName
                ? "bg-main text-white scale-105 shadow-md"
                : "border-2 border-gray-200 text-gray-600 hover:bg-gray-50"
            }  duration-200 ease-in-out py-1 md:py-3 px-1 md:px-6 rounded-lg capitalize`}
            onClick={() => handleCategoryChange(cat.categoryName, cat.id)}
          >
            {cat.categoryName}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {filtered.length > 0 ? (
          filtered.slice(0,8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No items found.</p>
        )}
      </div>
      <div className="flex justify-center items-center my-7">
        <button className="button-secondary ">See all products </button>
      </div>
    </div>
  );
}
