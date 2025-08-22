import React from "react";
import img from "..//assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-amber-50 border-b border-gray-200">
      <div className="bg-gray-800 text-white text-sm py-2 text-center">
        Register Yourself As An Amrutam Doctor
        <button className="ml-4 bg-green-700 px-4 py-1 rounded-lg hover:bg-green-800">
          Join Now
        </button>
      </div>

      <nav className="bg-amber-50">
        <div className="flex justify-center pt-1">
          <img src={img} alt="logo" className="mb-5 h-15 w-auto" />
        </div>
        <div>
          <ul className="flex justify-center gap-10 text-lg font-medium max-w-6xl mx-auto text-center text-gray-600 mb-2">
            <li>
              <a href="#hero" className="hover:text-amber-500">
                Home
              </a>
            </li>
            <li>
              <a href="#obsec" className="hover:text-amber-500">
                Find Doctors
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#test" className="hover:text-amber-500">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
