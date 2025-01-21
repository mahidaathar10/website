import React from "react";
import Image from "next/image";
const courses = [
  {
    title: "Latest design",
    category: "Design",
    description: "best collection",
    price: "R.s 10,000",
    image: "/dress.jpeg",
  },
  {
    title: "best selling outfit",
    category: "winter collection",
    description: "make your eid special with M&M Clothing",
    price: "R.s 15,000",
    image: "/dress2.jpeg",
  },
  {
    title: "Best article",
    category: "Business",
    description: "look great",
    price: "R.s 5,000",
    image: "/black.jpeg",
  },
  {
    title: "fashion desighner ",
    category: "fashion",
    description: "fashion ",
    price: "R.s 10,000",
    image: "/dress3.jpeg",
  },
  {
    title: "outfits",
    category: "",
    description: "grab your now",
    price: "R.s 10,000",
    image: "/dress4.jpeg",
  },
  {
    title: "New Arrivals",
    category: "clothes",
    description: "New articles for winters",
    price: "R.s 8,000",
    image: "/dress5.jpeg",
  },
];

const Courses = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Articles</h1>
      <p className="text-center text-gray-900">
        Be confident with our outfits
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Popular
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Recommended
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Best Price
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={600}
              className="object-cover w-full h-50"
              priority
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-900">{course.category}</p>
              <p className="text-gray-900 mt-2">{course.description}</p>

              
                <button className="px-6 py-2 border border-gray-400 text-gray-900 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                  Buy Now
                </button>
                <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
      </div>
    </div>
  );
};

export default Courses;