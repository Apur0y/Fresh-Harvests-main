"use client";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

type Product = {
  name: string;
  weight: string;
  image: string;
  category: "fruit" | "vegetable" | "salad";
  id: string;
};

export default function Products() {
  const [isActive, setIsActive] = useState<string>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);

  const mockProducts: Product[] = [
    {
      name: "Apple",
      weight: "$2.3/kg",
      image: "/apple.jpg",
      category: "fruit",
      id: "2",
    },
    {
      name: "Mushroom",
      weight: "$3.5/kg",
      image: "/mushroom.jpg",
      category: "vegetable",
      id: "3",
    },
    {
      name: "Lettuce",
      weight: "$1.8/kg",
      image: "/lettuce.jpg",
      category: "salad",
      id: "1",
    },
    // Add more products as needed
  ];

  useEffect(() => {
    setProducts(mockProducts);
    setFiltered(mockProducts);
  }, []);

  useEffect(() => {
    if (isActive === "all") {
      setFiltered(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === isActive
      );
      setFiltered(filtered);
    }
  }, [isActive, products]);

  const handleCategoryChange = (category: string) => {
    setIsActive(category);
  };

  return (
    <div>
      <div className="header-align">
        <p className="intro">Our Products</p>
        <h1 className="heading">Our Fresh Products</h1>
        <p className="para">
          We Pride ourselves on offering a wide variety of fresh and flavourful
          fruits, <br /> vegetables, and salad ingredients
        </p>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          className={`${
            isActive == "all" ? "bg-main text-white" : " border-2 text-gray-600"
          } py-3 px-6 rounded-lg `}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={`${
            isActive == "fruit"
              ? "bg-main text-white"
              : " border-2 text-gray-600"
          } py-3 px-6 rounded-lg `}
          onClick={() => handleCategoryChange("fruit")}
        >
          Fruits
        </button>
        <button
          className={`${
            isActive == "vegetable"
              ? "bg-main text-white"
              : " border-2 text-gray-600"
          } py-3 px-6 rounded-lg `}
          onClick={() => handleCategoryChange("vegetable")}
        >
          Vegetables
        </button>
        <button
          className={`${
            isActive == "salad"
              ? "bg-main text-white"
              : " border-2 text-gray-600"
          } py-3 px-6 rounded-lg `}
          onClick={() => handleCategoryChange("salad")}
        >
          Salad
        </button>
      </div>

      <div>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
