import {   useLoginUserMutation } from "@/redux/api/authApi";
// import { setToken } from "@/redux/feature/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
// import { useDispatch } from "react-redux";

interface LoginProps {
  setView: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
  
}

export default function Login({ setView, closeModal }: LoginProps) {
const route=useRouter()
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [login] = useLoginUserMutation();
  // const {  refetch } = useGetUserProfileQuery({});
  // const dispatch=useDispatch();



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await login(formData).unwrap();

      if (response.success) {
     route.push('/')
        toast.success(response.message);
        localStorage.setItem("token", response.data.token);

        // dispatch(setToken(response.data.token))
        // Redirect or update state
           // refetch();
        closeModal();
         window.location.reload()
     
      } else {
        toast.error(response.message || "Login failed");
      }
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null) {
        const errorObj = err as {
          data?: { message?: string };
          message?: string;
        };
        toast.error(
          errorObj.data?.message || errorObj.message || "Login failed"
        );
      } else {
        toast.error("Login failed");
      }
    }
  };
  return (
    <div className="bg-white flex flex-col gap-4 text-gray-800">
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            value={formData.email}
            name="email"
            placeholder="Enter your email"
            className="p-3 border-2 border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            value={formData.password}
            name="password"
            placeholder="Enter your password"
            className="p-3 border-2 border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="flex justify-between">
          <div>
            {/* <input type="checkbox" className="p-1 bg-white border-2" /> */}
            Remember me
          </div>

          <button className="underline font-semibold">Forgot Password</button>
        </div>

        <button className="button-main"> Login</button>
      </form>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-500">Or Sign in with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="w-full flex justify-center gap-4">
        <button
          className="
    w-1/2 py-2 px-4 border-2 border-gray-300 rounded-lg
    flex items-center justify-center gap-2
    text-gray-700 font-medium
    hover:bg-gray-50 hover:border-gray-400
    transition-colors duration-200
    shadow-sm hover:shadow-md
  "
        >
          <FcGoogle className="text-xl" />
          <span>Google</span>
        </button>

        <button
          className="
    w-1/2 py-2 px-4 border-2 border-gray-300 rounded-lg
    flex items-center justify-center gap-2
    text-blue-600 font-medium
    hover:bg-blue-50
    transition-colors duration-200
    shadow-sm hover:shadow-md
  "
        >
          <BiLogoFacebookCircle className="text-xl border-gray-300" />
          <span>Facebook</span>
        </button>
      </div>

      <div className="flex gap-1 justify-center ">
        <p> Don&apos;t have an account? </p>
        <button
          onClick={() => {
            setView(false);
          }}
          className="text-[#FF6A1A] cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
