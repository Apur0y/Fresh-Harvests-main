"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Login from "./Login";
import Register from "./Register";
import { TbCloverFilled } from "react-icons/tb";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useGetUserProfileQuery } from "@/redux/api/authApi";
import toast from "react-hot-toast";

export default function Navbar() {
  const modalRef = useRef<HTMLDialogElement>(null);
  type UserProfile = {
    data?: {
      email?: string;
    };
  };

  const [user, setUser] = useState<UserProfile | null>(null);

  const { data } = useGetUserProfileQuery({});

  const [view, setView] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  const closeModal = () => {
    modalRef.current?.close();
  };


  useEffect(() => {
  if (data) {
    setUser(data);
  }
}, [data]); // Remove 'user' from dependencies to avoid infinite loop


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  const Logout = async () => {
    localStorage.removeItem("token");
    setUser(null);

    toast.success("Log Out Successful!");
  };

  return (
    <div
      className={`navbar z-50 fixed w-full md:px-14 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
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
              <Link href="/">Home</Link>
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
        <Link
          href="/"
          className="btn bg-transparent border-none shadow-none text-xl text-gray-800"
        >
          <TbCloverFilled className="main-color size-7" />
          Fresh Harvests
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1 text-gray-600">
          <li>
            <Link href="/">Home</Link>
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

        <div>
          {user ? (
            <>
              <div className="relative group">
                {/* Profile button */}
                <button className="flex items-center gap-2 focus:outline-none">
                  {/* User icon */}
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Email - hidden on mobile */}
                  <span className="hidden md:inline text-sm font-medium text-gray-700 truncate max-w-[160px]">
                    {user?.data?.email}
                  </span>
                </button>

                {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {/* User email in dropdown */}
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="truncate font-medium">
                        {user?.data?.email}
                      </p>
                    </div>

                    {/* Logout button */}
                    <button
                      onClick={() => Logout()} // Your logout function here
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
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
          )}
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog ref={modalRef} id="my_modal_3" className="modal">
        <div className="modal-box bg-white rounded-md  max-w-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm text-black hover:bg-orange-200 border-none btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {view ? (
            <Login setView={setView} closeModal={closeModal}></Login>
          ) : (
            <Register setView={setView} closeModal={closeModal}></Register>
          )}
        </div>
      </dialog>
    </div>
  );
}
