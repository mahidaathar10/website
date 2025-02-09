import { FaPlus } from "react-icons/fa";

export default function Pages() {
  return (
    <div className="px-4 lg:px-16 py-8">
      
      <div className="max-w-[1320px] mx-auto text-center space-y-4 mb-12">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Questions Look Here
        </h1>
        <p className="text-gray-500 text-sm lg:text-base">
          The Best Variety Of Clothes Are Available
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1320px] mx-auto">
       
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h1 className="text-lg font-semibold text-gray-800">
                What types of clothes do you offer?
              </h1>
              <FaPlus />
            </div>
            <p className="text-gray-500 text-sm mt-4">
             Make Your Eid More Speacial We Have A Huge Variety Of Clothes To make Your Occation More speacial
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}