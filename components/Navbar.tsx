"use client";

import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { TbCloverFilled } from "react-icons/tb";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [view, setView] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled down 50px or more, set scrolled to true
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar z-50 fixed w-full md:px-14 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <Link href='/' className="btn btn-ghost text-xl text-gray-800">
          <TbCloverFilled className="main-color size-7" />
          Fresh Harvests
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 text-gray-600">
           <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
        </ul>
      </div>

      <div className="navbar-end text-black gap-6">
        <div className="hidden md:flex gap-6">
          <div className="flex">
            <FaHeart className="my-auto mr-1" />
            <p>Favorite</p>
          </div>

          <div className="flex">
            <FaShoppingCart className="my-auto mr-1" />
            <p>Cart</p>
          </div>
        </div>

        <button
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_3"
            ) as HTMLDialogElement | null;
            if (modal) {
              modal.showModal();
            }
          }}
          className="btn bg-transparent text-gray-800"
        >
          Sign in
        </button>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white rounded-md  max-w-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm text-black hover:bg-orange-200 border-none btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {view ? (
            <Login setView={setView}></Login>
          ) : (
            <Register setView={setView}></Register>
          )}
        </div>
      </dialog>
    </div>
  );
}
