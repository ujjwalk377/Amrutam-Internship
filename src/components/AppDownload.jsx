import React from "react";
import { FaUsers, FaWallet, FaComments, FaMoneyBillWave } from "react-icons/fa";
import bigphone from "../assets/bigphone.png";
import fdoc from "..//assets/fdoc.png";
import fdoct from "..//assets/fdoct.png";
import mdoc from "..//assets/mdoc.png";
import mdoct from "..//assets/mdoct.png";

const AppDownload = () => {
  return (
    <div className="pt-10 pb-10">
      <section className="bg-[#FFEDBF] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-snug">
              Get Started Today — <br /> Download the App Now!
            </h2>
            <p className="text-gray-600 mt-4 max-w-md">
              Simplify consultations, manage patients, and grow your
              practice—all in one place.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 bg-transparent">
              <div className="flex items-center gap-3 rounded-xl border p-3">
                <FaUsers className="text-green-700 text-xl" />
                <span className="text-[#33643F] font-medium">
                  Build Trust and Community with Forum
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border p-3">
                <FaMoneyBillWave className="text-green-700 text-xl" />
                <span className="text-[#33643F] font-medium">
                  Earn More with Pay Per Conversation
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border p-3">
                <FaComments className="text-green-700 text-xl" />
                <span className="text-[#33643F] font-medium">
                  Attract Patients with 5-Minute Free Call
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border p-3">
                <FaWallet className="text-green-700 text-xl" />
                <span className="text-[#33643F] font-medium">
                  Instant Access to Your Earnings with Wallet
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-18 cursor-pointer"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-18 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <img
              src={bigphone}
              alt="App Screenshot"
              className="max-h-[500px] drop-shadow-xl relative z-10 scale-140"
            />
            <img
              src={fdoc}
              alt="Doctor"
              className="w-30 h-30 rounded-full border-2 border-white shadow-lg absolute top-10 -left-10"
            />
            <img
              src={mdoc}
              alt="Doctor"
              className="w-30 h-30 rounded-full border-2 border-white shadow-lg absolute top-28 -right-10"
            />
            <img
              src={mdoct}
              alt="Doctor"
              className="w-20 h-20 rounded-full border-2 border-white shadow-lg absolute bottom-20 -left-3"
            />
            <img
              src={fdoct}
              alt="Doctor"
              className="w-25 h-25 rounded-full border-2 border-white shadow-lg absolute bottom-1 -right-8"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDownload;
