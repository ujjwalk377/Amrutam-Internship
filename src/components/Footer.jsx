import React from "react";
import logo from "..//assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#DDE1C2] text-gray-800 py-10 px-10 flex justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-80">
        <div>
          <img src={logo} alt="logo" />
          <h2 className="pt-3 pb-3 font-semibold text-[#33643F]">
            Get in Touch
          </h2>
          <p className="text-sm">support@amrutam.global</p>
          <p className="text-sm mt-2">
            Amrutam Pharmaceuticals Pvt Ltd, <br />
            Chitragupt ganj, Nai Sadak, Lashkar, <br />
            Gwalior - 474001
          </p>
          <p className="text-sm mt-2">+91 9713717999</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-700">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-700">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-700">
                Privacy Policy for Mobile App
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-700">
                Shipping and Return Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-700">
                International Delivery
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-700">
                For Business, Hotels and Resorts
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="/" className="bg-green-800 text-white p-2 rounded-full">
              <Facebook size={18} />
            </a>
            <a href="/" className="bg-green-800 text-white p-2 rounded-full">
              <Twitter size={18} />
            </a>
            <a href="/" className="bg-green-800 text-white p-2 rounded-full">
              <Instagram size={18} />
            </a>
            <a href="/" className="bg-green-800 text-white p-2 rounded-full">
              <Linkedin size={18} />
            </a>
            <a href="/" className="bg-green-800 text-white p-2 rounded-full">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
