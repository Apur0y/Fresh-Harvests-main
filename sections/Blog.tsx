import BlogCard from "@/components/BlogCard";
import React from "react";

export default function Blog() {
  const blogs = [
    {
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      date: "May 23, 2024",
      description: "link",
      image: "/blog-pic1.jpg",
    },
    {
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads.",
      date: "May 23, 2024",
      description: "link",
      image: "/blog-pic2.jpg",
    },
    {
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throught the Week",
      date: "May 23, 2024",
      description: "link",
      image: "/blog-pic3.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <div className="header-align mb-10">
        <p className="intro">Our Blog</p>
        <h1 className="heading">Fresh Harvest Blog</h1>
        <p className="para">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things{" "}
          <br /> related to fresh produce, health eating, and culinary
          inspiration.
        </p>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
}
