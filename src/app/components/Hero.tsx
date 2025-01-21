import React from "react";
 import Image from "next/image";


const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-7xl font-bold text-black leading-tight w-full md:w-[600px]">
          Welcome to M&M clothing
        </h1>
        
        <p className="text-gray-700 text-lg leading-relaxed w-full md:w-[600px]">
          FInd the best fashion style for you 
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-white hover:text-gray-900 border border-gray-900 transition duration-300 ease-in-out">
            SHOP NOW
          </button>
          
        </div>
      </div>

      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src="/Image.jpeg"
          alt="Learning"
          width={500}
          height={500}
          className="object-cover mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;