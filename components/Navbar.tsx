import { Carrot, Leaf, LucideMove } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-gray-800"><Leaf></Leaf>Fresh Harvests</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 text-gray-600">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>




      <div className="navbar-end text-black gap-6">
        <div className="flex">
          <LucideMove></LucideMove>
          <p>Favorite</p>
        </div>

        <div className="flex">
          <Carrot></Carrot>
          <p>Cart</p>
        </div>
        <Link href="/login">Sign in</Link>
      </div>
    </div>
  );
}
