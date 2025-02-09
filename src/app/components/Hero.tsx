import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left animate-pulse">
            WELCOME TO M&M CLOTHING
          </h1>
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Variety Of Dresses To Make Your Eid More Speacial .
          </p>
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
            <span>Shop Now</span>
          </button>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <Image
            src="/black.jpeg"
            alt="Product Image"
            width={434}
            height={584}
            className="transition-transform duration-700 ease-in-out transform scale-105 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
          
