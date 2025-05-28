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
        {["all", "fruit", "vegetable", "salad"].map((category) => (
          <button
            key={category}
            className={`transition-all duration-200 ease-in-out ${
              isActive === category
                ? "bg-main text-white scale-105 shadow-md"
                : "border-2 border-gray-200 text-gray-600 hover:bg-gray-50"
            } py-1 md:py-3 px-4 md:px-6 rounded-lg capitalize`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === "all" ? "All" : category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
