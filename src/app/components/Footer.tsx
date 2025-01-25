import React from "react";
import Link from "next/link";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h3 className="text-lg font-semibold text-green-700">
              JOIN OUR COURSES
            </h3>
            <p className="text-sm text-gray-900 mt-2">
              we have a multiple courses 
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-6 md:mt-0">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-whi"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-700 text-black rounded-r-md hover:bg-white"
              >
                Follow for more update
              </button>
            </div>
            <p className="text-xs text-gray-900 mt-2 md:mt-0 md:ml-4">
              By subscribing you agree to our{" "}
              <Link href="#" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/Logo.jpeg"
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-700">Articles Names</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  winter collection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  article by hamna
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  article by sadaf
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  article by wareesha 
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  zebras collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-700">variety</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                long shirt with trouser
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  shalwar kameez
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  western dresses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  beggy style shirts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  kurtis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-700">About Us</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Help/Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-green-700">
            © 2023 MAIDA'S. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-green-700 hover:text-indigo-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-green-700 hover:text-indigo-600">
              Terms of Service
            </Link>
            <Link href="#" className="text-green-700 hover:text-indigo-600">
               Settings
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;