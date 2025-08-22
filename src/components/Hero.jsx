import React from "react";
import img from "..//assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-bg-[#FFF7E2]  py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-30">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-md text-gray-600">Namaste, Welcome to Amrutam</h2>
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Join Amrutam –{" "}
            <span className="text-green-700">Grow Your Practice</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            Connect with more patients, set your own schedule, and grow your
            Ayurvedic practice effortlessly.
          </p>
          <button className="bg-green-700 text-white px-12 py-3 rounded-lg font-medium hover:bg-green-800">
            Join Now
          </button>

          <div className="flex gap-8 mt-6 justify-center md:justify-start">
            <div>
              <p className="text-2xl font-bold text-gray-800">500+</p>
              <p className="text-gray-500 text-sm">Average Active Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">40+</p>
              <p className="text-gray-500 text-sm">Average daily free calls</p>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src={img} alt="Doctors" className="w-full max-w-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
