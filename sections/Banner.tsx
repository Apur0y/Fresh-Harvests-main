import Download from "@/components/Download";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className=" flex justify-around  pt-24 bg-gray-100">
      {/* left div site */}
      <div className="flex flex-col gap-4 justify-center text-left">
        <div className="flex  flex-col gap-5">
          <span className="intro ">Welcome to Fresh Harvest</span>

          <h1 className="text-5xl md:text-7xl text-left font-medium md:font-semibold ">
            Fresh Fruits and <br /> Vegetables
          </h1>
          <p className="text-gray-800 text-sm">
            At Fresh Harvests, we are passionate about providing you with the
            freshest <br /> and most flawaful fruits and vegetables
          </p>

          <button className="button-main">Shop Now</button>
        </div>

        {/* salad patte */}
        <div className="bg-gray-200 p-4 rounded-lg flex">
          <div>
            <p className="font-semibold">Special Offer</p>
            <h2>Fresh Salad</h2>
            <h3>
              <span>Up to</span> <span>70%</span> <span>off</span>
            </h3>
            <p className="code-color text-white p-1 rounded-lg">
              {" "}
              <span>CODE:</span> <span className="text-amber-400">FRESH25</span>
            </p>
          </div>

          <div>
            <img src="salad.jpg" alt="" height={149} width={146} />
          </div>
        </div>

  <Download></Download>
      </div>

      {/* right side div */}
      <div className="hidden md:flex">
        <img src="./as.jpg" alt="" />
        {/* <Image src="/as.jpg" alt="little-girl" height={473} width={434} ></Image> */}
      </div>
    </div>
  );
}
