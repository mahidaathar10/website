import React from "react";
import Image from "next/image";
import Image2 from 'next/image'


const TopBar = () => {
  return (
    <div className="bg-gray-400 text-sm text-gray-700 hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 max-w-screen-lg mx-auto py-3 px-4">
        <div className="flex flex-col md:flex-row md:space-x-8 gap-2 md:gap-4">
          <div>
            <span>Phone Number: </span>
            <a href="tel:03354264982" className="text-black hover:underline">
            03354264982
            </a>
          </div>
          <div>
            <span>Email: </span>
            <a
              href="mailto:info@ddsgnr.com"
              className="text-black hover:underline"
            >
              mahidaathar10@gmail.com
            </a>
          </div>
        </div>

        



      </div>
    </div>
  );
};

export default TopBar;