
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Download() {
  return (
    <div>
      <p>Download App:</p>
      <div className="flex gap-3">
        <div className="flex bg-black text-white rounded-lg px-3 py-2 gap-2 ">
          <FaApple className="my-auto size-8" />
          <div>
            <p className="text-xs md:text-sm">Download on the</p>
            <h2 className="text-md md:text-xl font-medium">App Store</h2>
          </div>
        </div>

        <div className="flex bg-black text-white rounded-lg px-2 py-2 gap-2 ">
          <FaGooglePlay className="text-teal-600 my-auto size-8" />
          <div>
            <p className="text-xs md:text-sm">Get it on</p>
            <h2 className="text-sm md:text-xl font-medium">Google Play</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
